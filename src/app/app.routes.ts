import { Routes } from '@angular/router';
import { DiscoverComponent } from './fetures/discover/discover.component';
import { JoinComponent } from './fetures/join/join.component';
import { MainComponent } from './fetures/main/main.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'discover', component: DiscoverComponent },
    {path: 'join', component: JoinComponent}
];
