import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatDialogRef, MatDialog} from '@angular/material/dialog';

import { VendorService } from '../../services/vendor.service'
import { ManageVendorsComponent } from '../manage-vendors/manage-vendors.component'

interface Category {
  name: string;
  id?: number;
  children?: Category[];
}

const TREE_DATA: Category[] = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Fruit loops' },
    ]
  }, {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          { name: 'Broccoli' },
          { name: 'Brussel sprouts' },
        ]
      }, {
        name: 'Orange',
        children: [
          { name: 'Pumpkins' },
          { name: 'Carrots' },
        ]
      },
    ]
  },
];

@Component({
  selector: 'expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {
  expenseForm: FormGroup;
  treeControl = new NestedTreeControl<Category>(node => node.children);
  categoriesData = new MatTreeNestedDataSource<Category>();

  showList: boolean = false;

  public vendors: Map<any, any>[];

  constructor(public fb: FormBuilder, public expenseDialogRef: MatDialogRef<ExpenseComponent>,
     public manageVendors: MatDialog,  
     public vendorService: VendorService) {
    this.createForm()
    this.categoriesData.data = TREE_DATA
  }

  ngOnInit() {
    this.vendorService.getVendorsByAccount().subscribe((data: Array<Map<string, string>>) => {
      this.vendors = data;
    });
  }

  createForm() {
    this.expenseForm = this.fb.group({
      amount: [null, Validators.required],
      date: null,
      vendor_id: null,
      expense_category_id: null,
      notes: ''
    });
  }

  onNoClick() {
    this.expenseDialogRef.close()
  }
  
  onManageVendors(event : Event) {
    event.stopPropagation()
    this.manageVendors.open(ManageVendorsComponent)
  }
}
