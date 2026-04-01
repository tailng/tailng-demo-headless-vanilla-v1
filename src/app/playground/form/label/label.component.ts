import { Component } from '@angular/core';
import { TngLabel } from '@tailng-ui/primitives';

@Component({
  selector: 'app-label',
  standalone: true,
  templateUrl: './label.component.html',
  styleUrl: './label.component.css',
  imports: [TngLabel],
})
export class LabelComponent {}
