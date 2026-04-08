import { Component, computed, signal } from '@angular/core';
import { TngChip, TngChipRemove, TngChips } from '@tailng-ui/primitives';

const HEADLESS_CHIPS_OVERVIEW_PLAIN_SELECTED_TOPICS = Object.freeze([
  'Accessibility',
  'Forms',
  'Release notes',
]);

const HEADLESS_CHIPS_EXAMPLES_PLAIN_RELEASE_LANES = Object.freeze([
  'Stable',
  'Preview',
  'Locked',
]);

@Component({
  selector: 'app-chips',
  imports: [TngChips, TngChip, TngChipRemove],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css',
})
export class ChipsComponent {
  readonly headlessChipsOverviewPlainSelectedTopics = signal<readonly string[]>(
    HEADLESS_CHIPS_OVERVIEW_PLAIN_SELECTED_TOPICS,
  );
  readonly headlessChipsOverviewPlainSummary = computed(() => {
    const values = this.headlessChipsOverviewPlainSelectedTopics();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onHeadlessChipsOverviewPlainValuesChange(nextValues: readonly unknown[]): void {
    this.headlessChipsOverviewPlainSelectedTopics.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  readonly headlessChipsExamplesPlainReleaseLanes = signal<readonly string[]>(
    HEADLESS_CHIPS_EXAMPLES_PLAIN_RELEASE_LANES,
  );
  readonly headlessChipsExamplesPlainReleaseLaneSummary = computed(() => {
    const values = this.headlessChipsExamplesPlainReleaseLanes();
    return values.length > 0 ? values.join(', ') : 'none';
  });

  onHeadlessChipsExamplesPlainReleaseLanesChange(nextValues: readonly unknown[]): void {
    this.headlessChipsExamplesPlainReleaseLanes.set(
      nextValues.filter((value): value is string => typeof value === 'string'),
    );
  }

  isHeadlessChipsExamplesPlainReleaseLaneLocked(lane: string): boolean {
    return lane === 'Locked';
  }
}
