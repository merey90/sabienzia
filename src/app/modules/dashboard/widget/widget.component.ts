import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../models/team.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  @Input() activeCalls = 0;
  constructor() { }

  ngOnInit() {
  }

}
