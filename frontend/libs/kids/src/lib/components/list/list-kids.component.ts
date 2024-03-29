import { Component } from '@angular/core';

import { Activity, HeaderComponent, Kid } from '@hh/shared';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { SelectKidComponent } from "./select-kid.component";

@Component({
  selector: 'hh-kids-list',
  standalone: true,
  imports: [HeaderComponent, ReactiveFormsModule, FormsModule, SelectKidComponent],
  templateUrl: './list-kids.component.html',
  styleUrls: ['./list-kids.component.scss'],
})
export class ListKidsComponent {
  listKidsForm = new FormGroup({
    kid: new FormControl<Kid | null>(null, [Validators.required]),
    activity: new FormControl<Activity | null>(null, [Validators.required]),
  })
}
