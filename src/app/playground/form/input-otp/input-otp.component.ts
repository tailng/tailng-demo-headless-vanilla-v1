import { Component, computed, signal } from '@angular/core';
import {
  resolveTngOtpState,
  TngInputOtp as TngInputOtpPrimitive,
  TngInputOtpSlot,
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-input-otp',
  imports: [TngInputOtpPrimitive, TngInputOtpSlot],
  templateUrl: './input-otp.component.html',
  styleUrl: './input-otp.component.css',
})
export class InputOtpComponent {
  readonly headlessInputOtpOverviewPlainLength = 6;
  readonly headlessInputOtpOverviewPlainSlotIndexes = Array.from(
    { length: this.headlessInputOtpOverviewPlainLength },
    (_, index) => index,
  );
  readonly headlessInputOtpOverviewPlainValue = signal('18');
  readonly headlessInputOtpOverviewPlainActiveIndex = signal<number | null>(2);
  readonly headlessInputOtpOverviewPlainState = computed(() =>
    resolveTngOtpState(
      this.headlessInputOtpOverviewPlainLength,
      this.headlessInputOtpOverviewPlainValue(),
    ),
  );

  readonly headlessInputOtpExamplesSmsPlainLength = 6;
  readonly headlessInputOtpExamplesSmsPlainSlotIndexes = Array.from(
    { length: this.headlessInputOtpExamplesSmsPlainLength },
    (_, index) => index,
  );
  readonly headlessInputOtpExamplesSmsPlainValue = signal('73');
  readonly headlessInputOtpExamplesSmsPlainActiveIndex = signal<number | null>(2);
  readonly headlessInputOtpExamplesSmsPlainState = computed(() =>
    resolveTngOtpState(
      this.headlessInputOtpExamplesSmsPlainLength,
      this.headlessInputOtpExamplesSmsPlainValue(),
    ),
  );


  readonly headlessInputOtpExamplesRecoveryPlainLength = 6;
  readonly headlessInputOtpExamplesRecoveryPlainSlotIndexes = Array.from(
    { length: this.headlessInputOtpExamplesRecoveryPlainLength },
    (_, index) => index,
  );
  readonly headlessInputOtpExamplesRecoveryPlainValue = signal('91');
  readonly headlessInputOtpExamplesRecoveryPlainActiveIndex = signal<number | null>(2);
  readonly headlessInputOtpExamplesRecoveryPlainState = computed(() =>
    resolveTngOtpState(
      this.headlessInputOtpExamplesRecoveryPlainLength,
      this.headlessInputOtpExamplesRecoveryPlainValue(),
    ),
  );
}