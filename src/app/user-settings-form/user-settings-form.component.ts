import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    console.log(form.valid);
    this.dataService.postUserSettings(this.userSettings).subscribe(
      (result) => console.log(result),
      (err) => console.log(err)
    );
  }
}
