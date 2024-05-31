import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogEntryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'common-cloth';
}
