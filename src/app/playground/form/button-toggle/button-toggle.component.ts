import { Component, signal } from '@angular/core';
import { TngButtonToggle, TngButtonToggleGroup, TngButtonToggleValue } from '@tailng-ui/primitives';

@Component({
  selector: 'app-button-toggle',
  imports: [TngButtonToggle, TngButtonToggleGroup],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.css',
})
export class ButtonToggleComponent {

  readonly density = signal<'compact' | 'comfortable' | 'spacious'>('comfortable');

  onDensityChange(value: TngButtonToggleValue | null): void {
    if (value === 'compact' || value === 'comfortable' || value === 'spacious') {
      this.density.set(value);
    }
  }
  readonly activeTab = signal<'all' | 'assigned' | 'drafts'>('assigned');

  onTabChange(value: TngButtonToggleValue | null): void {
    if (value === 'all' || value === 'assigned' || value === 'drafts') {
      this.activeTab.set(value);
    }
  }
  readonly formats = signal<readonly string[]>(['bold']);

  onFormatsChange(values: readonly (string | number)[]): void {
    this.formats.set(values.filter((value): value is string => typeof value === 'string'));
  }
}

