import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { ValueAccessorDirective } from "../custom-control.accessor";
import { register } from 'swiper/element/bundle';
import { Kid, KidService } from "@hh/shared";

register();

@Component({
  selector: 'hh-kids-select-kid',
  standalone: true,
  imports: [AsyncPipe, NgOptimizedImage],
  templateUrl: './select-kid.component.html',
  styleUrls: ['./select-kid.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  hostDirectives: [ValueAccessorDirective],
})
export class SelectKidComponent {
  kids$ = this.kidsService.kids$;
  constructor(private kidsService: KidService) { }

  kidAvatarUrl(kid: Kid): string {
    if (!kid?.avatar?.gender) {
      return 'assets/avatars/boys/boy_1.svg';
    }
    return `assets/avatars/${kid.avatar.gender.toLowerCase()}s/${kid.avatar.src}`;
  }
}
