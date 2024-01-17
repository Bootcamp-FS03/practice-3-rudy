// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './security/interceptors/auth.interceptor';
import { FeedComponent } from './components/feed/feed.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { PostComponent } from './components/post/post.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PopupAlertComponent } from './components/popup-alert/popup-alert.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FeedComponent,
    LogoutComponent,
    ResetPasswordComponent,
    PostComponent,
    RegisterComponent,
    NavbarComponent,
    PopupAlertComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    // ...other providers
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
