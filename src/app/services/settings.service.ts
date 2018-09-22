import { Injectable } from '@angular/core';
import { Settings } from '../models/settings.model';

const MOCK_SETTINGS: Settings = {
  'showAdminsOnly': false,
  'showChart': true,
  'showDataWidget': true
};

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings: Settings;

  constructor() {
    this.settings = MOCK_SETTINGS;
  }

  setSettings(settings) {
    this.settings = settings;
  }

  getSettings(): Settings {
    return this.settings;
  }
}
