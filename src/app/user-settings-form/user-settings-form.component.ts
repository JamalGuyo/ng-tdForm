import { Component, OnInit } from '@angular/core';
import { IUserSettings } from '../models/user-setting';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.scss'],
})
export class UserSettingsFormComponent implements OnInit {
  userSettings: IUserSettings = {
    name: 'Milton',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annually',
  };

  constructor() {}

  ngOnInit(): void {}
}
