import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { HttpClientModule } from '@angular/common/http';
import { PhoneInfoComponent } from './phone-info/phone-info.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home-page', component: HomePageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'phone/:id', component: PhoneInfoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegistrationComponent,
    PhoneInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [HttpClientModule,  ],
    RouterModule.forRoot(
      appRoutes,
      { }
    ),
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
