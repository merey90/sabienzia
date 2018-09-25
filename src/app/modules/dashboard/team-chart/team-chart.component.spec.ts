import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamChartComponent } from './team-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TeamChartComponent', () => {
  let component: TeamChartComponent;
  let fixture: ComponentFixture<TeamChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamChartComponent ],
      imports: [NgxChartsModule, BrowserAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
