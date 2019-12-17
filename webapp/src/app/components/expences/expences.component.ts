import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {ExpenseComponent} from '../expense/expense.component'

@Component({
  selector: 'expences',
  templateUrl: './expences.component.html',
  styleUrls: ['./expences.component.scss'],
  host: {'class': 'flex-component'}
})
export class ExpencesComponent implements OnInit {
  expensesForm: FormGroup;

  constructor(public expense: MatDialog, public fb: FormBuilder) { 
    this.createForm()
  }

  ngOnInit() {
  }

  createForm() {
    this.expensesForm = this.fb.group({
      amount: [null, Validators.required],
      date: null
    });
  }

  newExpense() {
    const expenseRef = this.expense.open(ExpenseComponent)
  }
}
