import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Series } from '../series.model';

@Component({
  selector: 'app-team-chart',
  templateUrl: './team-chart.component.html',
  styleUrls: ['./team-chart.component.scss']
})
export class TeamChartComponent implements OnInit, OnChanges {
  @Input() teamName: string;
  @Input() series: Series[] = [];

  multi: any[] = [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Active Calls';
  timeline = false;

  colorScheme = {
    domain: ['#000000']
  };

  // line, area
  autoScale = true;

  constructor() {
    if (!!this.teamName && this.series.length > 0) {
      this.multi = [{
        name: this.teamName,
        series: this.series
      }];
    }
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() { }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.multi = [{
      name: this.teamName,
      series: this.series.length > 0 ? this.series : []
    }];
  }
}
