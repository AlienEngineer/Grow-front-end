import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
    MatInputModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatSnackBarModule
} from "@angular/material";

const modules = [
    BrowserAnimationsModule,
    MatInputModule, 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatSnackBarModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModules { }