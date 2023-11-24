/* eslint-disable @typescript-eslint/no-explicit-any */
import { ControlValueAccessor, FormControl } from '@angular/forms';

export class CustomControlAccessor implements ControlValueAccessor {
  onChange: any = () => {};
  onTouch: any = () => {};

  disabled = false;

  selectInputControl = new FormControl<string | null>(null);

  writeValue(obj: any): void {
    if (obj) {
      this.onChange(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}
