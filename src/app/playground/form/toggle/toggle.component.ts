import { Component, signal } from '@angular/core';
import { TngToggle, TngToggleGroup } from '@tailng-ui/primitives';

type PlainToggleViewMode = 'grid' | 'list' | 'split';
type PlainFormattingOption = 'bold' | 'code' | 'mentions';

@Component({
  selector: 'app-toggle',
  imports: [TngToggle, TngToggleGroup],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css',
})
export class ToggleComponent {

  readonly viewMode = signal<PlainToggleViewMode>('list');

  onViewModeChange(value: string | null): void {
    if (value === 'grid' || value === 'list' || value === 'split') {
      this.viewMode.set(value);
    }
  }
  readonly formatting = signal<readonly PlainFormattingOption[]>(['bold', 'code']);

  onFormattingChange(values: readonly string[]): void {
    this.formatting.set(
      values.filter((value): value is PlainFormattingOption => value === 'bold' || value === 'code' || value === 'mentions'),
    );
  }

  readonly alertsEnabled = signal(true);
}
