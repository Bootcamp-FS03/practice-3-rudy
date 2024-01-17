import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { authGuard } from 'src/app/security/guards/auth/auth.guard';
import { LogoutComponent } from 'src/app/components/logout/logout.component';
import { ResetPasswordComponent } from 'src/app/components/reset-password/reset-password.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { noauthGuard } from 'src/app/security/guards/noauth/noauth.guard';
import { ProfileComponent } from 'src/app/components/profile/profile.component';

const routes: Routes = [
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [noauthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [noauthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [noauthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
