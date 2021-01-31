import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IUserSettings } from './models/user-setting';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettings(userSettings: IUserSettings): Observable<IUserSettings> {
    return this.http.post<IUserSettings>(
      'https://putsreq.com/UQSiOaka9DUjruhB8Y5u',
      userSettings
    );
    // return of(userSettings);
  }
}
