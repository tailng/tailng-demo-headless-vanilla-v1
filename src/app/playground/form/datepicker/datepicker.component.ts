import { Component, type OnDestroy } from '@angular/core';
import { TngIcon } from '@tailng-ui/icons';
import {
  bindTngDatepicker,
  createDatepickerController,
  TngDatepickerDayCell,
  TngDatepickerDayGrid,
  TngDatepickerHost,
  TngDatepickerInput,
  TngDatepickerMonthGrid,
  TngDatepickerMonthOption,
  TngDatepickerNextButton,
  TngDatepickerOverlay,
  TngDatepickerPeriodButton,
  TngDatepickerPrevButton,
  TngDatepickerTrigger,
  TngDatepickerYearOption,
  TngDatepickerYearGrid,
} from '@tailng-ui/primitives';


import { defaultDatepickerDateAdapter, type TngDateAdapter } from '@tailng-ui/primitives';

const reportingAdapter: TngDateAdapter<Date> = {
  ...defaultDatepickerDateAdapter,
  format: (date, format, locale) => format === 'input' ? '22.04.2024' : defaultDatepickerDateAdapter.format(date, format, locale),
  parse: (text, locale) => defaultDatepickerDateAdapter.parse(text, locale),
};

@Component({
  selector: 'app-datepicker',
  imports: [
    TngIcon,
    TngDatepickerHost,
    TngDatepickerOverlay,
    TngDatepickerInput,
    TngDatepickerTrigger,
    TngDatepickerPrevButton,
    TngDatepickerPeriodButton,
    TngDatepickerNextButton,
    TngDatepickerDayGrid,
    TngDatepickerDayCell,
    TngDatepickerMonthGrid,
    TngDatepickerMonthOption,
    TngDatepickerYearGrid,
    TngDatepickerYearOption,
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css',
})
export class DatepickerComponent {
  protected readonly controller = createDatepickerController<Date>({
    value: '2024-04-22',
    today: '2024-04-18',
    minDate: '2024-04-01',
    maxDate: '2026-03-31',
    closeOnSelect: true,
    trapFocus: true,
    showOutsideDays: true,
  });

  protected readonly datepicker = bindTngDatepicker(this.controller);
  protected readonly bookingWindowPlainController = createDatepickerController<Date>({
    ownerDocument: document,
    value: '2024-05-18',
    today: '2024-05-18',
    minDate: '2024-05-10',
    maxDate: '2024-05-25',
    closeOnSelect: true,
    trapFocus: true,
    showOutsideDays: true,
  });

  protected readonly bookingWindowPlainDatepicker = bindTngDatepicker(this.bookingWindowPlainController);

  public ngOnDestroy(): void {
    this.controller.destroy();
    this.bookingWindowPlainController.destroy();
  }
}
