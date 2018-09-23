import { Injectable } from '@angular/core';
import { Settings } from '../models/settings.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const MOCK_SETTINGS: Settings = {
  'showAdminsOnly': false,
  'showChart': true,
  'showDataWidget': true
};


/**
 * simulate slow service
 */
const slow = 1500;

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: Settings;

  constructor() {
    this.settings = MOCK_SETTINGS;
  }

  setSettings(settings): Observable<Settings> {
    this.settings = settings;
    return of(this.settings).pipe(delay(slow));
  }

  getSettings(): Observable<Settings> {
    return of(this.settings).pipe(delay(slow));
  }
}
