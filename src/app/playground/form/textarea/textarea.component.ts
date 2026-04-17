
import { Component, signal } from '@angular/core';
import { TngInputGroup, TngTextarea } from '@tailng-ui/primitives';

@Component({
  selector: 'app-textarea',
  imports: [TngInputGroup, TngTextarea],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  readonly releaseNotes = signal('Ship notes should highlight API stability and migration steps.');

  onReleaseNotesInput(event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLTextAreaElement)) return;
    this.releaseNotes.set(target.value);
  }
  readonly reviewNotes = signal('Document the browser-safe fallback for the auth redirect flow.');

  onReviewNotesInput(event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLTextAreaElement)) return;
    this.reviewNotes.set(target.value);
  }

  readonly supportReply = signal('We have identified the root cause and applied the mitigation.');

  onSupportReplyInput(event: Event): void {
    const target = event.target;
    if (!(target instanceof HTMLTextAreaElement)) return;
    this.supportReply.set(target.value);
  }
}

