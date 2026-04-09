import { Component, signal } from '@angular/core';
import { TngIcon } from '@tailng-ui/icons';
import { TngInput, TngInputGroup, TngPrefix, TngSuffix } from '@tailng-ui/primitives';

@Component({
  selector: 'app-input-group',
  imports: [TngIcon, TngInput, TngInputGroup, TngPrefix, TngSuffix],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.css',
})
export class InputGroupComponent {
  readonly headlessInputGroupExamplesPlainClearActionQuery = signal<string>('design tokens');
  
  onHeadlessInputGroupExamplesPlainClearActionInput(event: Event): void {
    this.headlessInputGroupExamplesPlainClearActionQuery.set(
      (event.target as HTMLInputElement).value,
    );
  }
  
  clearHeadlessInputGroupExamplesPlainClearActionQuery(): void {
    this.headlessInputGroupExamplesPlainClearActionQuery.set('');
  }
}
