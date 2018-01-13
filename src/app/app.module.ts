import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModules } from "./MaterialModules";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PinInputComponent } from './components/pin-input/pin-input.component';
import { UsersInputComponent } from './components/users-input/users-input.component';
import { UsersDataSourceService } from "./services/users-data-source.service";
import { CurrentUserService } from "./services/current-user.service";

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PinInputComponent,
    UsersInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModules,
    HttpClientModule
  ],
  providers: [
    UsersDataSourceService,
    CurrentUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
