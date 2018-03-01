import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-section-info',
  templateUrl: './dialog-section-info.component.html',
  styleUrls: ['./dialog-section-info.component.css']
})
export class DialogSectionInfoComponent implements OnInit {
  cso;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogSectionInfoComponent>) {
    this.cso = data;
  }

  ngOnInit() {
  }
}
