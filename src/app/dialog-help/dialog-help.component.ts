import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-help',
  templateUrl: './dialog-help.component.html',
  styleUrls: ['./dialog-help.component.css']
})
export class DialogHelpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogHelpComponent>) { }

  ngOnInit() {
  }

}
