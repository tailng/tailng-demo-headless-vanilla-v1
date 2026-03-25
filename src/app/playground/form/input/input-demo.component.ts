import { Component } from '@angular/core';
import { TngInput } from '@tailng-ui/primitives';

@Component({
  selector: 'app-input-demo',
  standalone: true,
  templateUrl: './input-demo.component.html',
  styleUrl: './input-demo.component.css',
  imports: [TngInput],
})
export class InputDemoComponent {}
