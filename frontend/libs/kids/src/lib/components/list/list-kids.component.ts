import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '@hh/shared';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'hh-kids-list',
  standalone: true,
  imports: [CommonModule, IonicModule, HeaderComponent, RouterLink],
  templateUrl: './list-kids.component.html',
  styleUrls: ['./list-kids.component.scss'],
})
export class ListKidsComponent {}
