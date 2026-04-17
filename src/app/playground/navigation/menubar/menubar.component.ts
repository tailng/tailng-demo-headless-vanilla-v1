import { Component, signal } from '@angular/core';
import {
  TngMenu,
  TngMenuGroupLabel,
  TngMenuItem,
  TngMenuSelectEvent,
  TngMenuSeparator,
  TngMenubar,
  TngMenubarItem,
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-menubar',
  imports: [TngMenu, TngMenuGroupLabel, TngMenuItem, TngMenuSeparator, TngMenubar, TngMenubarItem],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css',
})
export class MenubarComponent {
  protected readonly overviewPlainLastCommand = signal('No command yet');

  protected onOverviewPlainCommandSelect(event: TngMenuSelectEvent): void {
    this.overviewPlainLastCommand.set(String(event.value));
  }

  protected onOverviewPlainLeafCommandSelect(value: string): void {
    this.overviewPlainLastCommand.set(value);
  }

  protected readonly workspacePlainLastCommand = signal('No command yet');

  protected onWorkspacePlainCommandSelect(event: TngMenuSelectEvent): void {
    this.workspacePlainLastCommand.set(String(event.value));
  }

  protected onWorkspacePlainLeafCommandSelect(value: string): void {
    this.workspacePlainLastCommand.set(value);
  }

  protected readonly cascadePlainLastCommand = signal('No cascaded command yet');

  protected onCascadePlainCommandSelect(event: TngMenuSelectEvent): void {
    this.cascadePlainLastCommand.set(String(event.value));
  }
}
