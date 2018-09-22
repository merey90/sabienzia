import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { Settings } from '../../../models/settings.model';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit {
  private settings: Settings;

  constructor(private settingsService: SettingsService) {
    this.settings = this.settingsService.getSettings();
  }

  onCbxClick(event: any): void {
    const cbxName = event.target.name;

    const settings = this.settings;
    settings[cbxName] = !settings[cbxName];
    this.settings = settings;

    this.settingsService.setSettings(this.settings);
  }

  ngOnInit() {
  }

}
