import {Component, OnInit} from '@angular/core';
import {Coupon} from "../../Shared/interfaces/interfaces";
import {formatDate} from "@angular/common";
import {CrudCouponService} from "../../Shared/services/crudCoupon.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  step: number = 10;
  ELEMENT_DATA: Coupon[];
  displayedColumns: string[] = ['id', 'Type',  'Date'];//'Description',
  currentTime = new Date().getTime()
  dataSource = this.ELEMENT_DATA;
  data = formatDate(new Date(), 'HH:mm:ss', 'ua')
  testDate = new Date(new Date().getTime() + 60 * 1000)


  constructor(
    private crud: CrudCouponService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetch(this.step);
    setInterval(() => {
      this.currentTime = new Date().getTime()
    }, 1000)
  }

  getDate(data){
    let elem = new Date(data.toString()).getTime();
    return ((elem - this.currentTime)/(1000*60)).toFixed();
  }

  fetch(step: number){
    this.ELEMENT_DATA = this.crud.fetch(step);
    this.dataSource = this.ELEMENT_DATA;
    return this.dataSource
  }

  openDialog(code) {
    this.dialog.open(DialogComponent, {
      data: {
        code
      }
    });
    setTimeout(() => {
      this.dialog.closeAll();
    }, 5000)
  }


  async removeElem(id: {id: number}, typeOfCoupon) {
    this.ELEMENT_DATA = await this.crud.removeElem(id);
    this.dataSource = await this.fetch(this.step);
    this.openDialog(id+typeOfCoupon.toString());
  }

}
