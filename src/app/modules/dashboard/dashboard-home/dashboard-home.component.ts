import { Component, OnInit, OnDestroy } from '@angular/core';
import * as moment from 'moment';

import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team.model';
import { SettingsService } from '../../../services/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit, OnDestroy {
  private teams: Team[] = [];
  private showChart = true;
  private teamSeries: Object = {};
  private showDataWidget = true;
  private selectedTeam: Team;
  private timeInterval: NodeJS.Timer;
  private teamsSubs: Subscription;
  private settingsSubs: Subscription;

  constructor(
    private teamService: TeamService,
    private settingsService: SettingsService
  ) { }

  getTeams() {
    this.teamsSubs = this.teamService.getTeams().subscribe(teams => {
      this.teams = teams;
      if (this.teams.length > 0) {
        this.selectedTeam = this.teams[0];
        this.teams.map(team => this.teamSeries[team.id] = []);
      }
      this.getCalls();
    });
  }

  getSettings() {
    this.settingsSubs = this.settingsService.getSettings().subscribe(settings => {
      this.showChart = settings.showChart;
      this.showDataWidget = settings.showDataWidget;
    });
  }

  getCalls() {
    this.timeInterval = setInterval(() => {
      const name = moment().format('hh:mm:ss');
      /**
       * Show only last 20 records
       */
      if (this.teams.length > 0) {
        this.teams.map(team => {
          const series = this.teamSeries[team.id].slice(Math.max(this.teamSeries[team.id].length - 19, 0));
          series.push({ name, value: Math.floor(Math.random() * 101) });
          this.teamSeries[team.id] = series;
        });
      }
    }, 2000);
  }

  ngOnInit() {
    this.getSettings();
    this.getTeams();
  }

  ngOnDestroy() {
    clearInterval(this.timeInterval);
    this.settingsSubs.unsubscribe();
    this.teamsSubs.unsubscribe();
  }

}
