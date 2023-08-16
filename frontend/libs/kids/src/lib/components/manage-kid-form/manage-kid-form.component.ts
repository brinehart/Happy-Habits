import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonModal, IonicModule } from '@ionic/angular';
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

@Component({
  selector: 'hh-kids-manage-form',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, FormsModule],
  templateUrl: './manage-kid-form.component.html',
  styleUrls: ['./manage-kid-form.component.scss'],
})
export class ManageKidFormComponent implements OnInit, OnDestroy {
  @ViewChild(IonModal) modal!: IonModal;

  manageKidForm = new FormGroup({
    id: new FormControl<string | undefined>(undefined),
    name: new FormControl<string | null>(null, [Validators.required]),
    birthday: new FormControl<Date | null>(null, [Validators.required]),
    image: new FormControl<string | null>(null),
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
                filter((kid) => kid !== undefined),
                take(1),
                tap((kid) => {
                  this.manageKidForm.patchValue({
                    id: kid?.id ?? null,
                    name: kid?.name ?? null,
                    birthday: kid?.birthday ?? null,
                    image: kid?.image ?? null,
                  });
                }),
              ),
            ),
          ),
        ),
      )
      .subscribe();
  }

  onSubmit() {
    if (this.manageKidForm.invalid) {
      return;
    }
    this.kidService.upsertKid(this.getKid());
    this.router.navigate(['/manage-kids']);
  }

  ngOnDestroy(): void {
    this.manageKidForm.reset();
  }

  private getKid(): Kid {
    return {
      id: this.manageKidForm.get('id')?.value ?? uuid(),
      name: this.manageKidForm.get('name')?.value ?? '',
      birthday: this.manageKidForm.get('birthday')?.value ?? new Date(),
      image: this.manageKidForm.get('image')?.value ?? undefined,
    };
  }
}
