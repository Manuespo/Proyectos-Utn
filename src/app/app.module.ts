import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { NewTravelComponent } from './modules/travels/new-travel/new-travel.component';
import { EditTravelComponent } from './modules/travels/edit-travel/edit-travel.component';
import { ListTravelComponent } from './modules/travels/list-travel/list-travel.component';
import { NewUserComponent } from './modules/users/new-user/new-user.component';
import { ListUserComponent } from './modules/users/list-user/list-user.component';
import { EditUserComponent } from './modules/users/edit-user/edit-user.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NewTravelComponent,
    EditTravelComponent,
    ListTravelComponent,
    NewUserComponent,
    ListUserComponent,
    EditUserComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    MainPageComponent,
    LoginPageComponent,
    RegisterPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgbModule,
    CarouselModule,
    MatSlideToggleModule,
    MatDialog,
    MatDialogRef,
    MAT_DIALOG_DATA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
  export class AppModule { }
