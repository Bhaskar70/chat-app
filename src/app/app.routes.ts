import { Routes } from '@angular/router';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:'' , component:LandingPageComponent},
    {path:'login' , component:LoginComponent },
    {path:'register' , component:RegisterComponent},
    {path:'chat-page' , component:ChatPageComponent}
];
