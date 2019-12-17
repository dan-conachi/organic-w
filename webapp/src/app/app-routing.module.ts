import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsCompanyComponent } from './components/settings-company/settings-company.component';
import { SettingsEmailComponent } from './components/settings-email/settings-email.component';
import { SettingsLogoComponent } from './components/settings-logo/settings-logo.component';
import { SettingsTaxesComponent } from './components/settings-taxes/settings-taxes.component';
import { SettingsMiscComponent } from './components/settings-misc/settings-misc.component';
import { SettingsPermissionComponent } from './components/settings-permission/settings-permission.component';
import { SettingsTemplateComponent } from './components/settings-template/settings-template.component';
import { ExpencesComponent } from './components/expences/expences.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'people', component: PeopleComponent, pathMatch: 'full'},
  {path: 'expences', component: ExpencesComponent, pathMatch: 'full'},
  {path: 'settings', component: SettingsComponent, pathMatch: 'prefix',
    children: [
      { path: 'company', component: SettingsCompanyComponent, pathMatch: 'full'},
      { path: 'taxes', component: SettingsTaxesComponent, pathMatch: 'full'},
      { path: 'email', component: SettingsEmailComponent, pathMatch: 'full'},
      { path: 'logo', component: SettingsLogoComponent, pathMatch: 'full'},
      { path: 'misc', component: SettingsMiscComponent, pathMatch: 'full'},
      { path: 'permission', component: SettingsPermissionComponent, pathMatch: 'full'},
      { path: 'template', component: SettingsTemplateComponent, pathMatch: 'full'},
      { path: '', redirectTo: 'company', pathMatch: 'full'}
    ]
  },
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
