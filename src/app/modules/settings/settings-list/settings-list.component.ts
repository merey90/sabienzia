import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { Settings } from '../../../models/settings.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit, OnDestroy {
  private settings: Settings;
  private settingsSubs: Subscription;
  private setSettingsSubs: Subscription[] = [];

  constructor(private settingsService: SettingsService) { }

  onCbxClick(event: any): void {
    const cbxName = event.target.name;

    const settings = this.settings;
    settings[cbxName] = !settings[cbxName];
    this.settings = settings;

    this.setSettings();
  }

  getSettings() {
    this.settingsSubs = this.settingsService.getSettings()
      .subscribe(settings => this.settings = settings);
  }

  setSettings() {
    this.setSettingsSubs.push(
      this.settingsService.setSettings(this.settings)
        .subscribe(settings => console.log('success'))
    );
  }

  ngOnInit() {
    this.getSettings();
  }

  ngOnDestroy() {
    this.settingsSubs.unsubscribe();
    this.setSettingsSubs.map((sub: Subscription) => sub.unsubscribe());
  }

}
