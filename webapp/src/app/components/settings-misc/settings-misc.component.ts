import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'settings-misc',
  templateUrl: './settings-misc.component.html',
  styleUrls: ['./settings-misc.component.scss'],
  host: {'class': 'flex-component'}
})
export class SettingsMiscComponent implements OnInit {
  miscForm: FormGroup;
  dateFormats: Object = [
    {key: 'dd/mm/yyyy', value: 'dd/mm/yyyy'},
    {key: 'mm/dd/yy', value: 'mm/dd/yy'},
    {key: 'mm/dd/yyyy', value: 'mm/dd/yyyy'},
    {key: 'dd/mm/yy', value: 'dd/mm/yy'},
    {key: 'yy-mm-dd', value: 'yy-mm-dd'},
    {key: 'yyyy-mm-dd', value: 'yyyy-mm-dd'}
  ]

  constructor(public fb: FormBuilder, public settingsService: SettingsService) { 
    this.createForm()
  }

  ngOnInit() {
    this.settingsService.getMisc().subscribe( (data) => {
      console.log('misc', data)
      this.miscForm.patchValue(data)
    })
  }

  createForm() {
    this.miscForm = this.fb.group({
      date_format_type: '',
      id: null
    });
  }

  save() {
    console.log('data', this.miscForm.value)
    this.settingsService.saveMisc(this.miscForm.value).subscribe( (_) => {})
  }
}
