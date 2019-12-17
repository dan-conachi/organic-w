import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
 
import { AppLoadService } from './services/app-load.service';

export class Settings {
	constructor(public name: string, public version: string){}
}
 
export function get_settings(appLoadService: AppLoadService) {
    return () => appLoadService.getSettings();
}
 
@NgModule({
  imports: [HttpClientModule],
  providers: [
    AppLoadService,
    { provide: APP_INITIALIZER, useFactory: get_settings, deps: [AppLoadService], multi: true }
  ]
})
export class AppLoadModule { }