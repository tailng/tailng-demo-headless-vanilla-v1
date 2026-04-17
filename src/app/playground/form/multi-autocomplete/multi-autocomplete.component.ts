import { Component, computed, signal } from '@angular/core';
import {
  TngMultiAutocomplete,
  TngMultiAutocompleteChip,
  TngMultiAutocompleteContent,
  TngMultiAutocompleteListbox,
  TngMultiAutocompleteOption,
  TngMultiAutocompleteOverlay,
  TngMultiAutocompleteTrigger,
} from '@tailng-ui/primitives';

interface HeadlessOverviewPlainLaunchMarketOption {
  readonly code: string;
  readonly label: string;
  readonly region: string;
}

const HEADLESS_OVERVIEW_PLAIN_LAUNCH_MARKET_OPTIONS: readonly HeadlessOverviewPlainLaunchMarketOption[] = Object.freeze([
  { code: 'ca', label: 'Canada', region: 'North America' },
  { code: 'de', label: 'Germany', region: 'Europe' },
  { code: 'id', label: 'Indonesia', region: 'Asia Pacific' },
  { code: 'in', label: 'India', region: 'Asia Pacific' },
  { code: 'jp', label: 'Japan', region: 'Asia Pacific' },
  { code: 'mx', label: 'Mexico', region: 'North America' },
  { code: 'es', label: 'Spain', region: 'Europe' },
]);

interface HeadlessStylingPlainReleaseOwnerOption {
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly disabled?: boolean;
}

const HEADLESS_STYLING_PLAIN_RELEASE_OWNER_OPTIONS: readonly HeadlessStylingPlainReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation' },
]);

interface HeadlessExamplesPlainLaunchMarketOption {
  readonly code: string;
  readonly label: string;
  readonly region: string;
}

const HEADLESS_EXAMPLES_PLAIN_LAUNCH_MARKET_OPTIONS: readonly HeadlessExamplesPlainLaunchMarketOption[] = Object.freeze([
  { code: 'ca', label: 'Canada', region: 'North America' },
  { code: 'de', label: 'Germany', region: 'Europe' },
  { code: 'id', label: 'Indonesia', region: 'Asia Pacific' },
  { code: 'in', label: 'India', region: 'Asia Pacific' },
  { code: 'jp', label: 'Japan', region: 'Asia Pacific' },
  { code: 'mx', label: 'Mexico', region: 'North America' },
  { code: 'es', label: 'Spain', region: 'Europe' },
]);

@Component({
  selector: 'app-multi-autocomplete',
  imports: [
    TngMultiAutocomplete,
    TngMultiAutocompleteTrigger,
    TngMultiAutocompleteChip,
    TngMultiAutocompleteContent,
    TngMultiAutocompleteOverlay,
    TngMultiAutocompleteListbox,
    TngMultiAutocompleteOption,
  ],
  templateUrl: './multi-autocomplete.component.html',
  styleUrl: './multi-autocomplete.component.css',
})
export class MultiAutocompleteComponent {
  readonly headlessOverviewPlainLaunchMarkets = HEADLESS_OVERVIEW_PLAIN_LAUNCH_MARKET_OPTIONS;
  readonly headlessOverviewPlainLaunchMarketsOpen = signal(false);
  readonly headlessOverviewPlainLaunchMarketsQuery = signal('');
  readonly headlessOverviewPlainSelectedMarketCodes = signal<readonly string[]>(['in', 'jp']);

  readonly headlessOverviewPlainFilteredLaunchMarkets = computed(() => {
    const normalizedQuery = this.headlessOverviewPlainLaunchMarketsQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.headlessOverviewPlainLaunchMarkets;
    }

    return this.headlessOverviewPlainLaunchMarkets.filter((market) =>
      (market.label + ' ' + market.region).toLowerCase().includes(normalizedQuery),
    );
  });

  readonly headlessOverviewPlainSelectedMarketSummary = computed(() => {
    if (this.headlessOverviewPlainSelectedMarketCodes().length === 0) {
      return 'none';
    }

    return this.headlessOverviewPlainSelectedMarketCodes()
      .map((code) => this.headlessOverviewPlainLaunchMarkets.find((market) => market.code === code)?.label ?? code)
      .join(', ');
  });

  onHeadlessOverviewPlainLaunchMarketsInput(event: Event): void {
    this.headlessOverviewPlainLaunchMarketsQuery.set((event.target as HTMLInputElement).value);
  }

  onHeadlessOverviewPlainLaunchMarketsValueChange(value: unknown): void {
    this.headlessOverviewPlainSelectedMarketCodes.set(this.toHeadlessOverviewPlainValueArray(value));
  }

  resolveHeadlessOverviewPlainLaunchMarketLabel(code: string): string {
    return this.headlessOverviewPlainLaunchMarkets.find((market) => market.code === code)?.label ?? code;
  }

  private toHeadlessOverviewPlainValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }

  readonly headlessStylingPlainReleaseOwners = HEADLESS_STYLING_PLAIN_RELEASE_OWNER_OPTIONS;
  readonly headlessStylingPlainReleaseOwnersOpen = signal(false);
  readonly headlessStylingPlainReleaseOwnerQuery = signal('');
  readonly headlessStylingPlainSelectedOwnerIds = signal<readonly string[]>(['mina']);

  readonly headlessStylingPlainFilteredReleaseOwners = computed(() => {
    const normalizedQuery = this.headlessStylingPlainReleaseOwnerQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.headlessStylingPlainReleaseOwners;
    }

    return this.headlessStylingPlainReleaseOwners.filter((owner) =>
      (owner.name + ' ' + owner.team).toLowerCase().includes(normalizedQuery),
    );
  });

  onHeadlessStylingPlainReleaseOwnerInput(event: Event): void {
    this.headlessStylingPlainReleaseOwnerQuery.set((event.target as HTMLInputElement).value);
  }

  onHeadlessStylingPlainReleaseOwnerValueChange(value: unknown): void {
    this.headlessStylingPlainSelectedOwnerIds.set(this.toHeadlessStylingPlainValueArray(value));
  }

  resolveHeadlessStylingPlainReleaseOwnerLabel(id: string): string {
    return this.headlessStylingPlainReleaseOwners.find((owner) => owner.id === id)?.name ?? id;
  }

  isHeadlessStylingPlainReleaseOwnerDisabled(owner: HeadlessStylingPlainReleaseOwnerOption): boolean {
    return owner.disabled === true;
  }

  private toHeadlessStylingPlainValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value
      .map((item) => (typeof item === 'string' ? item : String(item)))
      .filter((item) => item.length > 0);
  }

  readonly headlessExamplesPlainLaunchMarkets = HEADLESS_EXAMPLES_PLAIN_LAUNCH_MARKET_OPTIONS;
  readonly headlessExamplesPlainLaunchMarketsOpen = signal(false);
  readonly headlessExamplesPlainLaunchMarketsQuery = signal('');
  readonly headlessExamplesPlainSelectedMarketCodes = signal<readonly string[]>(['in', 'jp']);

  readonly headlessExamplesPlainFilteredLaunchMarkets = computed(() => {
    const normalizedQuery = this.headlessExamplesPlainLaunchMarketsQuery().trim().toLowerCase();
    if (normalizedQuery === '') {
      return this.headlessExamplesPlainLaunchMarkets;
    }

    return this.headlessExamplesPlainLaunchMarkets.filter((market) =>
      (market.label + ' ' + market.region).toLowerCase().includes(normalizedQuery),
    );
  });

  readonly headlessExamplesPlainSelectedMarketSummary = computed(() => {
    if (this.headlessExamplesPlainSelectedMarketCodes().length === 0) {
      return 'none';
    }

    return this.headlessExamplesPlainSelectedMarketCodes()
      .map((code) => this.headlessExamplesPlainLaunchMarkets.find((market) => market.code === code)?.label ?? code)
      .join(', ');
  });

  onHeadlessExamplesPlainLaunchMarketsInput(event: Event): void {
    this.headlessExamplesPlainLaunchMarketsQuery.set((event.target as HTMLInputElement).value);
  }

  onHeadlessExamplesPlainLaunchMarketsValueChange(value: unknown): void {
    this.headlessExamplesPlainSelectedMarketCodes.set(this.toHeadlessExamplesPlainValueArray(value));
  }

  resolveHeadlessExamplesPlainLaunchMarketLabel(code: string): string {
    return this.headlessExamplesPlainLaunchMarkets.find((market) => market.code === code)?.label ?? code;
  }

  private toHeadlessExamplesPlainValueArray(value: unknown): readonly string[] {
    if (!Array.isArray(value)) {
      return [];
    }

    return value.map((item) => (typeof item === 'string' ? item : String(item))).filter(Boolean);
  }
}