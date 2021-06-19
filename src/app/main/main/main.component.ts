import {AfterViewInit, Component, ElementRef, forwardRef, OnInit, Provider, ViewChild} from '@angular/core';
import {Coupon} from "../../Shared/interfaces/interfaces";
import {formatDate} from "@angular/common";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MainComponent),
  multi: true
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [VALUE_ACCESSOR]
})
export class MainComponent implements OnInit, AfterViewInit{

  @ViewChild('picker') picker: ElementRef

  ELEMENT_DATA: Coupon[];
  displayedColumns: string[] = ['id', 'Type', 'Description', 'Date'];
  currentTime = formatDate(new Date(), 'HH:mm:ss M/d/yy', 'ua');
  dataSource = this.ELEMENT_DATA;
  data = formatDate(new Date(), 'HH:mm:ss', 'ua')
  testDate = new Date(new Date().getTime() + 60 * 1000)
  private onChange = (value: any) => {};


  constructor() { }

  ngOnInit(): void {
    // console.log(this.data, formatDate(new Date().getTime() + 60 * 1000, 'HH:mm:ss', 'ua'))
    // console.log(this.ELEMENT_DATA)

    this.ELEMENT_DATA = JSON.parse(localStorage.getItem('Data'));
    this.dataSource = this.ELEMENT_DATA;

    setInterval(() => {
      this.currentTime = formatDate(new Date(), 'HH:mm:ss d/MM/yy', 'ua');
      this.onChange(this.currentTime)
    }, 1000)
  }


  async removeElem(id: {id: number}) {
    console.log(this.currentTime, '123123123123123');
    this.ELEMENT_DATA = await this.ELEMENT_DATA.filter((elem: Coupon) => elem.id !== +id );
    this.dataSource = this.ELEMENT_DATA;
    localStorage.setItem(
      'Data',
      JSON.stringify(this.ELEMENT_DATA)
    )
    console.log(this.ELEMENT_DATA)
  }

  ngAfterViewInit(): void {
    console.log(this.picker);
  }

}
