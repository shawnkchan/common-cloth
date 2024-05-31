import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';
import { TrendsPageComponent } from './trends-page/trends-page.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'trends',
        component: TrendsPageComponent,
        title: 'Trends Page'
    }
];
