import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomeComponent } from './dashboard-home.component';
import { FormsModule } from '@angular/forms';
import { TeamChartComponent } from '../team-chart/team-chart.component';
import { WidgetComponent } from '../widget/widget.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SettingsService } from '../../../services/settings.service';
import { TeamService } from '../../../services/team.service';
import { Team } from '../../../models/team.model';
import { of } from 'rxjs';
import { Settings } from '../../../models/settings.model';

describe('DashboardHomeComponent', () => {
  let component: DashboardHomeComponent;
  let fixture: ComponentFixture<DashboardHomeComponent>;
  const TEAMS_MOCK: Team[] = [
    {
      id: 1,
      name: 'Team 1'
    },
    {
      id: 2,
      name: 'Team 2'
    },
    {
      id: 3,
      name: 'Team 3'
    }
  ];

  const mockTeamService = {
    getTeams: () => {
      return of(TEAMS_MOCK);
    }
  };

  const MOCK_SETTINGS: Settings = {
    'showAdminsOnly': false,
    'showChart': true,
    'showDataWidget': true
  };

  const mockSettingsService = {
    getSettings: () => {
      return of(MOCK_SETTINGS);
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomeComponent, TeamChartComponent, WidgetComponent ],
      imports: [ FormsModule, NgxChartsModule ],
      providers: [
        { provide: SettingsService, useValue: mockSettingsService },
        { provide: TeamService, useValue: mockTeamService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select first team when receives teams list from service', () => {
    component.ngOnInit();
    expect(component.selectedTeam).toBeDefined();
  });

  it('should get settings from service', () => {
    component.showDataWidget = false;
    component.ngOnInit();
    expect(component.showDataWidget).toBe(true);
  });
});
