import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppLoadModule } from './app-load.module';

import { MatIconModule, MAT_LABEL_GLOBAL_OPTIONS, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTreeModule } from '@angular/material/tree';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { LeftNavBarComponent } from './components/left-nav-bar/left-nav-bar.component';
import { PeopleComponent } from './components/people/people.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsCompanyComponent } from './components/settings-company/settings-company.component';
import { SettingsTaxesComponent } from './components/settings-taxes/settings-taxes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsLogoComponent } from './components/settings-logo/settings-logo.component';
import { SettingsTemplateComponent } from './components/settings-template/settings-template.component';
import { SettingsEmailComponent } from './components/settings-email/settings-email.component';
import { SettingsPermissionComponent } from './components/settings-permission/settings-permission.component';
import { SettingsMiscComponent } from './components/settings-misc/settings-misc.component';

import { SettingsService } from './services/settings.service';
import { ExpencesComponent } from './components/expences/expences.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { ManageVendorsComponent } from './components/manage-vendors/manage-vendors.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeftNavBarComponent,
    PeopleComponent,
    SettingsComponent,
    SettingsCompanyComponent,
    SettingsTaxesComponent,
    PageNotFoundComponent,
    SettingsLogoComponent,
    SettingsTemplateComponent,
    SettingsEmailComponent,
    SettingsPermissionComponent,
    SettingsMiscComponent,
    ExpencesComponent,
    ExpenseComponent,
    ManageVendorsComponent
  ],
  imports: [
    AppRoutingModule,
    AppLoadModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatTreeModule,
    MatCheckboxModule,
    MatAutocompleteModule
  ],
  entryComponents: [ExpenseComponent, ManageVendorsComponent],
  providers: [
    SettingsService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: { float: 'always' } },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }