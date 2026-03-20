import { Component, OnDestroy, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import {
  TngBreadcrumb,
  TngBreadcrumbItem,
  TngBreadcrumbLink,
  TngBreadcrumbList,
  TngBreadcrumbSeparator,
} from '@tailng-ui/primitives';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    TngBreadcrumb,
    TngBreadcrumbList,
    TngBreadcrumbItem,
    TngBreadcrumbLink,
    TngBreadcrumbSeparator,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnDestroy {
  protected readonly title = signal('tailng-demo-headless-vanilla-v1');

  protected readonly breadcrumbLabel = signal<string | null>(null);

  private readonly breadcrumbRoutesSub?: Subscription;

  constructor(private readonly router: Router) {
    this.updateBreadcrumbFromUrl(this.router.url);

    this.breadcrumbRoutesSub = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd,
        ),
      )
      .subscribe(() => this.updateBreadcrumbFromUrl(this.router.url));
  }

  ngOnDestroy(): void {
    this.breadcrumbRoutesSub?.unsubscribe();
  }

  private updateBreadcrumbFromUrl(url: string): void {
    const cleaned = url.split('?')[0].split('#')[0];
    const segments = cleaned.replace(/^\/+/, '').split('/').filter(Boolean);
    const primary = segments[0] ?? 'home';

    if (primary === 'home' || primary === '') {
      this.breadcrumbLabel.set(null);
      return;
    }

    const label = this.slugToTitle(primary);
    this.breadcrumbLabel.set(label);
  }

  private slugToTitle(slug: string): string {
    const overrides: Record<string, string> = {
      'charts-country-metrics': 'Charts',
    };
    const overridden = overrides[slug];
    if (overridden) {
      return overridden;
    }

    return slug
      .split('-')
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  }
}
