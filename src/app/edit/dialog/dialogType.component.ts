import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {typeOfCoupon} from "../../Shared/interfaces/interfaces";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogTypeComponent implements OnInit {

  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogTypeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: typeOfCoupon) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      nameOfType: new FormControl(null, [Validators.required])
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
