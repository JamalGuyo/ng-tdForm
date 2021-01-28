import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../models/user-setting';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss'],
})
export class UserSettingsFormComponent implements OnInit {
  originalUserSettings: IUserSettings = {
    name: '',
    emailOffers: false,
    interfaceStyle: '',
    subscriptionType: '',
  };

  userSettings: IUserSettings = { ...this.originalUserSettings };

  constructor() {}

  ngOnInit(): void {}
}
