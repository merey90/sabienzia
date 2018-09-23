import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

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

/**
 * simulate slow service
 */
const slow = 1500;

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams: Team[] = [];
  constructor() {
    this.teams = TEAMS_MOCK;
  }

  getTeams(): Observable<Team[]> {
    return of(this.teams).pipe(delay(slow));
  }
}
