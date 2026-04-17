import { Component, computed, signal } from '@angular/core';
import { TngListboxDirective, TngOptionDirective } from '@tailng-ui/primitives';

type CapabilityId = 'a11y' | 'components' | 'styling' | 'tests' | 'roadmap';

interface CapabilityOption {
  readonly description: string;
  readonly disabled?: boolean;
  readonly id: CapabilityId;
  readonly label: string;
}

const CAPABILITY_OPTIONS: readonly CapabilityOption[] = Object.freeze([
  { id: 'a11y', label: 'Accessibility baseline', description: 'Keyboard and ARIA contracts for deterministic interaction behavior.' },
  { id: 'components', label: 'Components integration', description: 'Shared primitives and wrappers for TailNG form controls.' },
  { id: 'styling', label: 'Styling contracts', description: 'State hooks and CSS contracts for custom product skins.' },
  { id: 'tests', label: 'Testing harness', description: 'Regression suites for keyboard, pointer, and typeahead behavior.' },
  { id: 'roadmap', label: 'Wrapper roadmap (disabled)', description: 'Upcoming wrapper exploration for richer listbox composition.', disabled: true },
]);

function isCapabilityId(value: string): value is CapabilityId {
  return value === 'a11y' || value === 'components' || value === 'styling' || value === 'tests' || value === 'roadmap';
}

type ChannelId = 'changelog' | 'docs' | 'support' | 'team';

interface ChannelOption {
  readonly description: string;
  readonly id: ChannelId;
  readonly label: string;
}

const CHANNEL_OPTIONS: readonly ChannelOption[] = Object.freeze([
  { id: 'changelog', label: 'Changelog', description: 'Release notes and external announcements.' },
  { id: 'docs', label: 'Docs', description: 'Public docs synchronization and snippets.' },
  { id: 'team', label: 'Team updates', description: 'Internal team status updates.' },
  { id: 'support', label: 'Support', description: 'Customer success and support queues.' },
]);

function isChannelId(value: string): value is ChannelId {
  return value === 'changelog' || value === 'docs' || value === 'team' || value === 'support';
}


@Component({
  selector: 'app-listbox',
  imports: [TngListboxDirective, TngOptionDirective],
  templateUrl: './listbox.component.html',
  styleUrl: './listbox.component.css',
})
export class ListboxComponent {
  readonly capabilityOptions = CAPABILITY_OPTIONS;
  readonly selectedCapabilities = signal<readonly CapabilityId[]>(['components']);
  readonly selectedSummary = computed(() => {
    const labels = this.selectedCapabilities()
      .map((value) => this.capabilityOptions.find((option) => option.id === value)?.label)
      .filter((label): label is string => label !== undefined);

    return labels.length > 0 ? labels.join(', ') : 'none';
  });

  onSelectedCapabilitiesChange(value: string | readonly string[] | null): void {
    this.selectedCapabilities.set(this.toArray(value));
  }

  private toArray(value: string | readonly string[] | null): readonly CapabilityId[] {
    if (value === null) {
      return [];
    }

    const values = typeof value === 'string' ? [value] : value;
    return values.filter(isCapabilityId);
  }

  readonly channelOptions = CHANNEL_OPTIONS;
  readonly selectedChannelsA = signal<readonly ChannelId[]>(['docs']);
  readonly selectedChannelsB = signal<readonly ChannelId[]>(['team']);
  readonly selectedSummaryA = computed(() => this.formatSelection(this.selectedChannelsA()));
  readonly selectedSummaryB = computed(() => this.formatSelection(this.selectedChannelsB()));


  private toArray2(value: string | readonly string[] | null): readonly ChannelId[] {
    if (value === null) {
      return [];
    }

    const values = typeof value === 'string' ? [value] : value;
    return values.filter(isChannelId);
  }
  onSelectedChannelsAChange(value: string | readonly string[] | null): void {
    this.selectedChannelsA.set(this.toArray2(value));
  }

  onSelectedChannelsBChange(value: string | readonly string[] | null): void {
    this.selectedChannelsB.set(this.toArray2(value));
  }

  private formatSelection(values: readonly ChannelId[]): string {
    const labels = values
      .map((value) => this.channelOptions.find((option) => option.id === value)?.label)
      .filter((label): label is string => label !== undefined);

    return labels.length > 0 ? labels.join(', ') : 'none';
  }
}
