import { Directive, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[hhValueAccessor]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValueAccessorDirective),
      multi: true,
    },
  ],
})
export class ValueAccessorDirective<T> implements ControlValueAccessor {
  private onChange: any = () => {};
  private onTouched: any = () => {};
  private $value = signal<T | undefined>(undefined);
  private $disabled = signal<boolean>(false);
  readonly value = this.$value.asReadonly();
  readonly disabled = this.$disabled.asReadonly();

  constructor() {}

  valueChange(v: T) {
    this.onChange(v);
  }

  touchedChange(v: boolean) {
    this.onTouched(v);
  }

  writeValue(obj: any): void {
    this.$value.set(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.$disabled.set(isDisabled);
  }
}
