import { Component, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Kid, KidService } from '@hh/shared';
import { v4 as uuid } from 'uuid';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter, map, switchMap, take, tap } from 'rxjs';
import { KidAvatarSelectComponent } from "../manage/kid-avatar-select/kid-avatar-select.component";
import { Avatar, Gender } from "../../models";
import { IonDatetimeButton, IonIcon, IonInput, IonLabel, IonToggle, IonModal, IonDatetime, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'hh-kids-manage-form',
  standalone: true,
  imports: [AsyncPipe,IonToggle, IonIcon, IonLabel, IonInput, IonDatetimeButton, IonModal, IonDatetime, IonButton, ReactiveFormsModule, FormsModule, KidAvatarSelectComponent],
  templateUrl: './manage-kid-form.component.html',
  styleUrls: ['./manage-kid-form.component.scss'],
})
export class ManageKidFormComponent implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal!: IonModal;
  selectedGender: Gender | undefined = 'Boy';
  selectedIndex: number | undefined;

  manageKidForm = new FormGroup({
    id: new FormControl<string | undefined>(undefined),
    name: new FormControl<string | null>(null, [Validators.required]),
    birthday: new FormControl<string | null>(null, [Validators.required]),
    birthdayPresentation: new FormControl<string | null>(null),
    avatar: new FormControl<Avatar | undefined>(undefined),
  });

  mode$: Observable<'Edit' | 'New'> = this.route.data.pipe(
    map((data) => {
      switch (data['mode']) {
        case 'edit':
          return 'Edit';
        default:
          return 'New';
      }
    }),
  );

  constructor(
    private kidService: KidService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  async dismissModal() {
    await this.modal.dismiss();
  }

  ngOnInit(): void {
    this.route.data
      .pipe(
        filter((data) => data['mode'] === 'edit'),
        take(1),
        switchMap(() =>
          this.route.params.pipe(
            filter((params) => params['id'] !== undefined),
            take(1),
            map((params) => params['id']),
            switchMap((id) =>
              this.kidService.selectById(id).pipe(
                tap((kid) => {
                  if (kid === undefined) {
                    this.router.navigate(['/manage-kids/add']).then();
                  }
                }),
                filter((kid): kid is Kid => kid !== undefined),
                take(1),
                tap((kid) => {
                  this.selectedGender = kid?.avatar?.gender;
                  this.selectedIndex = kid?.avatar?.index;
                  this.manageKidForm.setValue({
                    id: kid?.id ?? null,
                    name: kid?.name ?? null,
                    birthday: new Date(kid?.birthday).toISOString() ?? null,
                    birthdayPresentation: new Date(kid?.birthday).toISOString().split('T')[0] ?? null,
                    avatar: kid?.avatar ?? null,
                  });
                }),
              ),
            ),
          ),
        ),
      )
      .subscribe();
  }

  async onSubmit() {
    if (this.manageKidForm.invalid) {
      return;
    }
    this.kidService.upsertKid(this.getKid());
    await this.router.navigate(['/manage-kids']);
  }

  ngOnDestroy(): void {
    this.manageKidForm.reset();
  }

  private getKid(): Kid {
    return {
      id: this.manageKidForm.get('id')?.value ?? uuid(),
      name: this.manageKidForm.get('name')?.value ?? '',
      birthday: new Date(this.manageKidForm.get('birthday')?.value ?? '') ?? new Date(),
      avatar: this.manageKidForm.get('avatar')?.value ?? undefined,
    };
  }

  toggleGender() {
    this.selectedGender = this.selectedGender === 'Boy' ? 'Girl' : 'Boy';
  }

  toggleBirthdayModal(isOpen: boolean) {
    this.birthdayModalOpen.set(isOpen);
  }

  setBirthdayPresentation() {
    this.manageKidForm.get('birthdayPresentation')?.setValue(
      this.manageKidForm.get('birthday')?.value?.split('T')[0] ?? null);
  }

  birthdayModalOpen = signal<boolean>(false);

  async deleteKid() {
    const id = this.manageKidForm.get('id')?.value;
    if(id == undefined) return;
    this.kidService.deleteKid(id);
    await this.router.navigate(['/manage-kids']);
  }
}
