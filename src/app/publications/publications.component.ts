import { Component, OnInit } from '@angular/core';
import {PublicationsService} from '../services/publications.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  private _title = 'Publications';
  publications;

  constructor(private publicationService: PublicationsService) { }

  ngOnInit() {
    this.publications = this.publicationService.getPublications();
  }

}
