import { Component } from '@angular/core';
import { BlogEntryComponent } from '../blog-entry/blog-entry.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlogEntryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
