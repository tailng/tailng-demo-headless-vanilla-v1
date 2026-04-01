import { Component, signal } from '@angular/core';
import { TngSwitch } from '@tailng-ui/primitives';

@Component({
  selector: 'app-switch',
  standalone: true,
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css',
  imports: [TngSwitch],
})
export class SwitchComponent {
  readonly releaseReady = signal(true);

  onReleaseReadyToggle(): void {
    this.releaseReady.update((value) => !value);
  }
}
