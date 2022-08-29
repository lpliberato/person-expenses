import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LaunchComponent } from './pages/launch/launch.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ActionsComponent } from './shared/actions/actions.component';
import { ButtonGroupComponent } from './shared/button-group/button-group.component';
import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';

import { CategoryService } from './services/category.service';
import { LaunchService } from './services/launch.service';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    LaunchesComponent,
    CategoryComponent,
    CategoriesComponent,
    HomeComponent,
    ActionsComponent,
    ButtonGroupComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    CategoryService,
    LaunchService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
