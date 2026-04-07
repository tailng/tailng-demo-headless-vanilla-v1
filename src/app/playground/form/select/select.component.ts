import { Component, computed, signal } from '@angular/core';
import {
  TngSelect,
  TngSelectContent,
  TngSelectIcon,
  TngSelectListbox,
  TngSelectOption,
  TngSelectOverlay,
  TngSelectTrigger,
  TngSelectValue,
} from '@tailng-ui/primitives';

interface HeadlessSelectboxOverviewPlainWorkflowStageOption {
  readonly disabled?: boolean;
  readonly label: string;
  readonly note: string;
  readonly value: string;
}

type HeadlessSelectboxOverviewPlainValue = string | readonly string[] | null;

const HEADLESS_SELECTBOX_OVERVIEW_PLAIN_WORKFLOW_STAGE_OPTIONS: readonly HeadlessSelectboxOverviewPlainWorkflowStageOption[] = Object.freeze([
  { value: 'draft', label: 'Draft', note: 'Internal drafting only.' },
  { value: 'review', label: 'In review', note: 'Waiting on editorial review.' },
  { value: 'qa', label: 'QA ready', note: 'Approved for validation.' },
  { value: 'live', label: 'Live', note: 'Already published.', disabled: true },
]);


interface HeadlessSelectboxExamplesOwnerPlainReleaseOwnerOption {
  readonly disabled?: boolean;
  readonly id: string;
  readonly name: string;
  readonly team: string;
  readonly timezone: string;
}

type HeadlessSelectboxExamplesOwnerPlainValue = string | readonly string[] | null;

const HEADLESS_SELECTBOX_EXAMPLES_OWNER_PLAIN_RELEASE_OWNER_OPTIONS: readonly HeadlessSelectboxExamplesOwnerPlainReleaseOwnerOption[] = Object.freeze([
  { id: 'abigail', name: 'Abigail Chen', team: 'Design systems', timezone: 'UTC-8' },
  { id: 'mina', name: 'Mina Lee', team: 'Core UI', timezone: 'UTC-5' },
  { id: 'omar', name: 'Omar Aziz', team: 'Compliance', timezone: 'UTC+1', disabled: true },
  { id: 'sanjay', name: 'Sanjay Patel', team: 'Documentation', timezone: 'UTC+5:30' },
]);

@Component({
  selector: 'app-select',
  imports: [
    TngSelect,
    TngSelectTrigger,
    TngSelectValue,
    TngSelectIcon,
    TngSelectContent,
    TngSelectOverlay,
    TngSelectListbox,
    TngSelectOption,
  ],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css',
})
export class SelectComponent {
  readonly headlessSelectboxOverviewPlainWorkflowStages =
    HEADLESS_SELECTBOX_OVERVIEW_PLAIN_WORKFLOW_STAGE_OPTIONS;
  readonly headlessSelectboxOverviewPlainSelectedStage = signal<string | null>('review');
  readonly headlessSelectboxOverviewPlainSelectedStageLabel = computed(() => {
    const selectedValue = this.headlessSelectboxOverviewPlainSelectedStage();
    if (selectedValue === null) {
      return null;
    }

    return (
      this.headlessSelectboxOverviewPlainWorkflowStages.find(
        (stage) => stage.value === selectedValue,
      )?.label ?? null
    );
  });
  readonly headlessSelectboxOverviewPlainSelectedStageSummary = computed(() =>
    this.headlessSelectboxOverviewPlainSelectedStageLabel() ?? 'none',
  );

  onHeadlessSelectboxOverviewPlainSelectedStageChange(
    value: HeadlessSelectboxOverviewPlainValue,
  ): void {
    this.headlessSelectboxOverviewPlainSelectedStage.set(
      this.toHeadlessSelectboxOverviewPlainSingleValue(value),
    );
  }

  private toHeadlessSelectboxOverviewPlainSingleValue(
    value: HeadlessSelectboxOverviewPlainValue,
  ): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }


  readonly headlessSelectboxExamplesOwnerPlainReleaseOwners =
    HEADLESS_SELECTBOX_EXAMPLES_OWNER_PLAIN_RELEASE_OWNER_OPTIONS;
  readonly headlessSelectboxExamplesOwnerPlainSelectedOwnerId = signal<string | null>('mina');
  readonly headlessSelectboxExamplesOwnerPlainSelectedOwner = computed(() => {
    const selectedValue = this.headlessSelectboxExamplesOwnerPlainSelectedOwnerId();
    if (selectedValue === null) {
      return null;
    }

    return (
      this.headlessSelectboxExamplesOwnerPlainReleaseOwners.find(
        (owner) => owner.id === selectedValue,
      ) ?? null
    );
  });
  readonly headlessSelectboxExamplesOwnerPlainSelectedOwnerSummary = computed(() =>
    this.headlessSelectboxExamplesOwnerPlainSelectedOwner()?.name ?? 'none',
  );

  onHeadlessSelectboxExamplesOwnerPlainSelectedOwnerChange(
    value: HeadlessSelectboxExamplesOwnerPlainValue,
  ): void {
    this.headlessSelectboxExamplesOwnerPlainSelectedOwnerId.set(
      this.toHeadlessSelectboxExamplesOwnerPlainSingleValue(value),
    );
  }

  private toHeadlessSelectboxExamplesOwnerPlainSingleValue(
    value: HeadlessSelectboxExamplesOwnerPlainValue,
  ): string | null {
    if (typeof value === 'string') {
      return value;
    }

    if (Array.isArray(value)) {
      const first = value[0];
      return typeof first === 'string' ? first : null;
    }

    return null;
  }
}
