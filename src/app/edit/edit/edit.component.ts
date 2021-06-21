import {Component, OnDestroy, OnInit} from '@angular/core';
import {CrudTypeOfCouponService} from "../../Shared/services/crud-type-of-coupon.service";
import {typeOfCoupon} from "../../Shared/interfaces/interfaces";
import {MatDialog} from "@angular/material/dialog";
import {DialogTypeComponent} from "../dialog/dialogType.component";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {

  dSub: Subscription;
  displayedColumns: string[] = ['id', 'code', 'nameOfType', 'edit'];
  dataSource: typeOfCoupon;
  nameOfType: string;

  constructor(
    private crudType: CrudTypeOfCouponService,
    public dialog: MatDialog
  ) { }

  openDialog(method, id?: number) {
    const dialogRef = this.dialog.open(DialogTypeComponent, {
      width: '250px',
      data: {nameOfType: this.nameOfType}
    });

    this.dSub = dialogRef.afterClosed().subscribe(result => {
      if(method === 'add'){
        this.add(result.nameOfType);
      }
      else if(method === 'edit'){
        this.edit(result.nameOfType, id);
      }
    });
  }

  ngOnInit(): void {
    this.dataSource = this.crudType.fetch();
  }

  add(result){
    this.crudType.add(result);
    this.dataSource = this.crudType.fetch();
  }

  delete(id: number){
    this.crudType.delete(id);
    this.dataSource = this.crudType.fetch();
  }

  edit(result: string, id: number){
    this.crudType.edit(result, id)
    this.dataSource = this.crudType.fetch();
  }

  ngOnDestroy() {
    if (this.dSub){
      this.dSub.unsubscribe();
    }
  }

}
