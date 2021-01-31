import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUserSettings } from './models/user-setting';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  postUserSettings(userSettings: IUserSettings): Observable<IUserSettings> {
    return of(userSettings);
  }
}
