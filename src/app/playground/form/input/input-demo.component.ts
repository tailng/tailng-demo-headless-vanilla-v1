import { Component } from '@angular/core';
import { TngInput, TngInputGroup, TngPrefix, TngSuffix } from '@tailng-ui/primitives';

@Component({
  selector: 'app-input-demo',
  standalone: true,
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.css',
  imports: [TngInput, TngInputGroup, TngPrefix, TngSuffix],
})
export class InputDemoComponent {}
