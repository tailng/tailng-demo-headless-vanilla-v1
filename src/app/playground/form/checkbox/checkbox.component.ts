import { Component } from '@angular/core';
import { TngCheckbox } from '@tailng-ui/primitives';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
  imports: [TngCheckbox],
})
export class CheckboxComponent {}
