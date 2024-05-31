import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogEntryComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('slideUpDown', [
      state('visible', style({ transform: 'translateY(0)' })),
      state('hidden', style({ transform: 'translateY(-100%)' })),
      transition('visible <=> hidden', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'common-cloth';
  isHidden = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollThreshold = 200;
    this.isHidden = window.scrollY > scrollThreshold;
  }
}
