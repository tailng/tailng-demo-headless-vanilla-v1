import { Component, signal } from '@angular/core';
import {
  TngMenu,
  TngMenuGroupLabel,
  TngMenuItem,
  TngMenuSelectEvent,
  TngMenuSeparator,
  TngMenuTrigger,
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-menu',
  imports: [TngMenu, TngMenuGroupLabel, TngMenuItem, TngMenuSeparator, TngMenuTrigger],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  protected readonly overviewPlainLastCommand = signal('No command yet');

  protected onOverviewPlainCommandSelect(event: TngMenuSelectEvent): void {
    this.overviewPlainLastCommand.set(String(event.value));
  }

  protected readonly dropdownPlainLastAction = signal('No action yet');

  protected onDropdownPlainActionSelect(event: TngMenuSelectEvent): void {
    this.dropdownPlainLastAction.set(String(event.value));
  }

  protected readonly nestedPlainLastCommand = signal('No command yet');

  protected onNestedPlainCommandSelect(event: TngMenuSelectEvent): void {
    this.nestedPlainLastCommand.set(String(event.value));
  }
}