import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaxService } from '../../services/tax.service';

@Component({
  selector: 'settings-taxes',
  templateUrl: './settings-taxes.component.html',
  styleUrls: ['./settings-taxes.component.scss'],
  host: {'class': 'flex-component'}
})
export class SettingsTaxesComponent implements OnInit {
  taxForm: FormGroup;
  taxes: Map<any, any>[];
  addMode = false;

  constructor(public fb: FormBuilder, public taxService: TaxService) { 
    this.createForm()
  }

  createForm() {
    //form control name should match with Tax class property name
    this.taxForm = this.fb.group({
      account_id: '',
      name: ['', Validators.required],
      rate: '',
      registration_number: '',
      id: null
    });
  }

  ngOnInit() {
    this.get()
  }

  get() {
    this.taxService.getTaxes().subscribe((data: Array<Map<string, string>>) => {
      this.taxes = data;
    });
  }

  saveTax() {
    this.taxService.saveTaxeByUser(this.taxForm.value) ///.pipe(catchError((obj) => of(`val ${obj}`)));
    .subscribe((v) => {
      if(v != null) {
        this.refreshTaxList()
        this.taxForm.patchValue(v)
      }
    });
  }

  editTax(tax) {
    this.addMode = true
    this.taxForm.patchValue(tax);
  }

  deleteTax(tax) {
    this.taxService.deleteTaxe(tax.id).subscribe((d) => {
      if(d != null) this.refreshTaxList()
    })
  }

  setAddMode() {
    this.taxForm.setValue({account_id: null,
    name: null,
    rate: null,
    registration_number: null,
    id: null})
    this.addMode = true
  }

  refreshTaxList() {
    this.taxes = []
    this.get()
  }
}
