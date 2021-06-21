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
  displayedColumns: string[] = ['id', 'Type', 'Description', 'Date'];
  // currentTime = formatDate(new Date(), 'HH:mm:ss M/d/yy', 'ua');
  currentTime = new Date().getTime()
  dataSource = this.ELEMENT_DATA;
  data = formatDate(new Date(), 'HH:mm:ss', 'ua')
  testDate = new Date(new Date().getTime() + 60 * 1000)


  constructor(
    private crud: CrudCouponService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    // console.log(this.data, formatDate(new Date().getTime() + 60 * 1000, 'HH:mm:ss', 'ua'))
    // console.log(this.ELEMENT_DATA)

    // this.ELEMENT_DATA = JSON.parse(localStorage.getItem('Data'));
    // this.dataSource = this.ELEMENT_DATA;
    this.fetch(this.step);

    setInterval(() => {
      // this.currentTime = formatDate(new Date(), 'HH:mm:ss d/MM/yy', 'ua');
      this.currentTime = new Date().getTime()
    }, 1000)
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


  async removeElem(id: {id: number}) {
    // this.ELEMENT_DATA = await JSON.parse(localStorage.getItem('Data')).filter((elem: Coupon) => elem.id !== +id )
    // localStorage.setItem(
    //   'Data',
    //   JSON.stringify(this.ELEMENT_DATA)
    // )
    this.ELEMENT_DATA = await this.crud.removeElem(id);
    this.dataSource = await this.fetch(this.step);
    this.openDialog(id);
    // this.ELEMENT_DATA = await this.ELEMENT_DATA.filter((elem: Coupon) => elem.id !== +id );
    // this.dataSource = this.ELEMENT_DATA;
    // localStorage.setItem(
    //   'Data',
    //   JSON.stringify(this.ELEMENT_DATA)
    // )
  }

}
