import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'manage-vendors',
  templateUrl: './manage-vendors.component.html',
  styleUrls: ['./manage-vendors.component.scss']
})
export class ManageVendorsComponent implements OnInit {
  vendorsList: Map<String, any>[];
  vendorForm: FormGroup;
  addMode: boolean = false;

  constructor(public fb: FormBuilder,
    public manageVendorDialogRef: MatDialogRef<ManageVendorsComponent>,
    public vendorService: VendorService) {
    this.createForm()
  }

  ngOnInit() {
    this.getVendors()
  }

  createForm() {
    this.vendorForm = this.fb.group({
      vendor_id: [null, Validators.required],
      name: ''
    });
  }

  saveVendor() {
    this.vendorService.save(this.vendorForm.value).subscribe((data) => {
      this.getVendors()
    });
  }

  getVendors() {
    this.vendorService.getVendorsByAccount().subscribe((data: Array<Map<string, any>>) => {
      this.vendorsList = data
    })
  }
}
