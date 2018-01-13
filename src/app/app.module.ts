import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MaterialModules } from "./MaterialModules";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PinInputComponent } from './components/pin-input/pin-input.component';
import { UsersInputComponent } from './components/users-input/users-input.component';
import { UsersService } from "./services/users.service";
import { CurrentUserService } from "./services/current-user.service";

import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavigationService } from './services/navigation.service';
import { ServicesService } from './services/services.service';
import { ServicesInputComponent } from './components/services-input/services-input.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NewSessionComponent } from './components/new-session/new-session.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PinInputComponent,
    UsersInputComponent,
    ToolbarComponent,
    ServicesInputComponent,
    LayoutComponent,
    NewSessionComponent,
    CurrentUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModules,
    HttpClientModule
  ],
  providers: [
    UsersService,
    ServicesService,
    CurrentUserService,
    NavigationService
  ],
  entryComponents: [
    NewSessionComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
