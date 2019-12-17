import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMiscComponent } from './settings-misc.component';

describe('SettingsMiscComponent', () => {
  let component: SettingsMiscComponent;
  let fixture: ComponentFixture<SettingsMiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
