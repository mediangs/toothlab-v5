import { Component, OnInit } from '@angular/core';

import { People } from '../schemas/people-schema';
import {PeopleService} from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _title = 'People';
  people;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople();
  }

}

