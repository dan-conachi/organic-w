import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'settings-company',
  templateUrl: './settings-company.component.html',
  styleUrls: ['./settings-company.component.scss'],
  host: { 'class': 'flex-component' }
})
export class SettingsCompanyComponent implements OnInit {
  public industries: Map<any, any>[];
  public companyTypes: Map<any, any>[];
  public currencies: Map<any, any>[];
  public countries: Map<any, any>[];
  public timezones: Map<any, any>[];
  public isDataLoaded: boolean = false;

  companyForm: FormGroup;

  constructor(public settingsService: SettingsService, public fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    //form control name should match with User class property name
    this.companyForm = this.fb.group({
      business_name: ['Company name', Validators.required],
      company_type_id: '',
      industry_id: '',
      currency_id: '',
      country_id: ['', Validators.required],
      address1: '',
      address2: '',
      city: '',
      province: '',
      postal_code: '',
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      mobile_phone: '',
      fax: '',
      time_zone_id: ['', Validators.required],
      url: '',
      id: '',
      address_id: ''
    });
  }

  ngOnInit() {
    this.settingsService.getIndustries().subscribe((data: Array<Map<string, string>>) => {
      this.industries = data;
    });
    this.settingsService.getCompanyTypes().subscribe((data: Array<Map<string, string>>) => {
      this.companyTypes = data;
    });
    this.settingsService.getCurrencies().subscribe((data: Array<Map<string, string>>) => {
      this.currencies = data;
    });
    this.settingsService.getCountries().subscribe((data: Array<Map<string, string>>) => {
      this.countries = data;
    });
    this.settingsService.getTimezones().subscribe((data: Array<Map<string, string>>) => {
      this.timezones = data;
    });
    this.get()
  }

  get() {
    this.settingsService.getSettings().subscribe((data) => {
      if (data) {
        this.isDataLoaded = true
        this.companyForm.patchValue(data)
      }
    });
  }

  onSubmit() {
    const saved = this.settingsService.saveSettings(this.companyForm.value).pipe(catchError((obj) => of(`val ${obj}`)));
    saved.subscribe((v) => {
      if(v != null) this.get()
    });
  }
}
