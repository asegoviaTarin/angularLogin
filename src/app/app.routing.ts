import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { ChartComponent } from './chart/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: ChartComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' },
    // { path: '', redirectTo: 'login',  pathMatch: 'full'}

];

export const routing = RouterModule.forRoot(appRoutes);