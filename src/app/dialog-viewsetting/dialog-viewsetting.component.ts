import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {duplicateArray} from '../shared/utils';

@Component({
  selector: 'app-dialog-viewsetting',
  templateUrl: './dialog-viewsetting.component.html',
  styleUrls: ['./dialog-viewsetting.component.css']
})
export class DialogViewsettingComponent implements OnInit {
  private previousData;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogViewsettingComponent>) {
  }

  ngOnInit() {
    this.previousData = duplicateArray(this.data);
  }
}
