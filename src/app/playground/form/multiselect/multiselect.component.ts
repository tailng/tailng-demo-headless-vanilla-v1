import { Component, computed, signal } from '@angular/core';
import {
  TngMultiSelect,
  TngMultiSelectListbox,
  TngMultiSelectOption,
  TngSelectContent,
  TngSelectIcon,
  TngSelectOverlay,
  TngSelectTrigger,
  TngSelectValue,
} from '@tailng-ui/primitives';

interface HeadlessMultiselectOverviewPlainPlanetOption {
  readonly disabled?: boolean;
  readonly label: string;
  readonly value: string;
}

const HEADLESS_MULTISELECT_OVERVIEW_PLAIN_PLANET_OPTIONS: readonly HeadlessMultiselectOverviewPlainPlanetOption[] = Object.freeze([
  { value: 'mercury', label: 'Mercury' },
  { value: 'venus', label: 'Venus' },
  { value: 'earth', label: 'Earth' },
  { value: 'mars', label: 'Mars' },
  { value: 'jupiter', label: 'Jupiter', disabled: true },
  { value: 'uranus', label: 'Uranus' },
  { value: 'neptune', label: 'Neptune' },
]);

interface TagOption {
  readonly value: string;
  readonly label: string;
}

const TAG_OPTIONS: readonly TagOption[] = Object.freeze([
  { value: 'a11y', label: 'A11y' },
  { value: 'forms', label: 'Forms' },
  { value: 'overlay', label: 'Overlay' },
  { value: 'docs', label: 'Docs' },
]);

@Component({
  selector: 'app-multiselect',
  imports: [
    TngMultiSelect,
    TngSelectTrigger,
    TngSelectValue,
    TngSelectIcon,
    TngSelectContent,
    TngSelectOverlay,
    TngMultiSelectListbox,
    TngMultiSelectOption,
  ],
  templateUrl: './multiselect.component.html',
  styleUrl: './multiselect.component.css',
})
export class MultiselectComponent {
  readonly planets = HEADLESS_MULTISELECT_OVERVIEW_PLAIN_PLANET_OPTIONS;
  readonly selectedPlanets = signal<readonly string[]>(['earth', 'mars']);
  readonly selectedSummary = computed(() => {
    const values = this.selectedPlanets();
    if (values.length === 0) return 'Select planets';
    return values
      .map((v) => this.planets.find((p) => p.value === v)?.label ?? v)
      .join(', ');
  });

  onValueChange(value: unknown): void {
    this.selectedPlanets.set(this.toValueArray(value));
  }

  private toValueArray(value: unknown): readonly string[] {
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) return value.filter((v): v is string => typeof v === 'string');
    return typeof value === 'string' ? [value] : [];
  }

  readonly tagOptions = TAG_OPTIONS;
  readonly tagValueA = signal<readonly string[]>(['a11y', 'docs']);
  readonly tagValueB = signal<readonly string[]>(['forms']);
  readonly tagSummaryA = computed(() => this.resolveLabels(this.tagValueA()));
  readonly tagSummaryB = computed(() => this.resolveLabels(this.tagValueB()));

  onTagAValueChange(value: unknown): void { this.tagValueA.set(this.toValueArray2(value)); }
  onTagBValueChange(value: unknown): void { this.tagValueB.set(this.toValueArray2(value)); }

  private resolveLabels(values: readonly string[]): string {
    if (values.length === 0) return 'none';
    return values.map((v) => this.tagOptions.find((t) => t.value === v)?.label ?? v).join(', ');
  }

  private toValueArray2(value: unknown): readonly string[] {
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) return value.filter((v): v is string => typeof v === 'string');
    return typeof value === 'string' ? [value] : [];
  }
}
