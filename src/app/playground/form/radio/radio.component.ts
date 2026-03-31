import { Component, signal } from '@angular/core';
import { TngRadio } from '@tailng-ui/primitives';

type BillingPlan = 'starter' | 'pro' | 'enterprise';
@Component({
  selector: 'app-radio',
  standalone: true,
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
  imports: [TngRadio],
})
export class RadioComponent {
  readonly selectedPlan = signal<BillingPlan>('pro');

  onPlanChange(plan: BillingPlan, event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || !target.checked) {
      return;
    }

    this.selectedPlan.set(plan);
  }

}
