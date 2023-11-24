import {
  AfterViewInit,
  Component, computed,
  CUSTOM_ELEMENTS_SCHEMA, effect,
  ElementRef,
  forwardRef,
  Input,
  signal,
  ViewChild
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { IonicModule } from "@ionic/angular";
import { CustomControlAccessor } from "./custom-control.accessor";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { takeUntilDestroyed, toObservable } from "@angular/core/rxjs-interop";
import { distinctUntilChanged, tap } from "rxjs/operators";
import { filter } from "rxjs";
import { Avatar, Gender } from "@hh/kids";

register();

@Component({
  selector: 'hh-kids-kid-avatar-select',
  standalone: true,
  imports: [CommonModule, IonicModule, NgOptimizedImage],
  templateUrl: './kid-avatar-select.component.html',
  styleUrls: ['./kid-avatar-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => KidAvatarSelectComponent),
    multi: true,
  },],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KidAvatarSelectComponent extends CustomControlAccessor implements AfterViewInit {
  @Input() set selectedGender(selectedGender: Gender) {
    this.$selectedGender.set(selectedGender);
  }

  $selectedGender = signal<Gender>('Boy')
  $selectedIndex = signal<number>(0);
  $selectedAvatar = computed<Avatar>(() =>
    this.$selectedGender() === 'Boy' ?
      this.boyAvatars[this.$selectedIndex()] :
      this.girlAvatars[this.$selectedIndex()]
  );
  $avatarChanged = effect(() => {
    this.onChange(this.$selectedAvatar());
    this.onTouch();
  });

  boyAvatars: Avatar[] = [...Array(25).keys()].map((index) => ({
    gender: 'Boy',
    index: index + 1,
    src: `boy_${index + 1}.svg`,
    alt: `Boy Avatar ${index + 1}`,
  }));

  girlAvatars: Avatar[] = [...Array(25).keys()].map((index) => ({
    gender: 'Girl',
    index: index + 1,
    src: `girl_${index + 1}.svg`,
    alt: `Girl Avatar ${index + 1}`,
  }));

  @ViewChild('avatarSwiper', { static: false })
  swiperRef: ElementRef | undefined;

  constructor() {
    super();

    toObservable(this.$selectedGender).pipe(
      filter((selectedGender): selectedGender is Gender => !!selectedGender),
      distinctUntilChanged(),
      tap(() => {
        const swiperEl = document.querySelector('swiper-container');
        if(swiperEl != undefined) {
          swiperEl.swiper.slideTo(0);
        }
      }),
      takeUntilDestroyed()
    ).subscribe();
  }

  get value(): Avatar {
    return this.$selectedAvatar();
  }

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container');
    if(swiperEl != undefined) {
      swiperEl.addEventListener('swiperslidechange', () => {
        const index = swiperEl.swiper.activeIndex;
        this.setIndex(index);
      });
    }
  }

  setIndex(selectedIndex: number) {
    this.$selectedIndex.set(selectedIndex);
  }
}
