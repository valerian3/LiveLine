import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formatDate} from "@angular/common";
import {CrudService} from "../../Shared/services/crud.service";
import {Coupon, typeOfCoupon} from "../../Shared/interfaces/interfaces";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  status: boolean = false;
  form: FormGroup;
  currentTime = formatDate(new Date(), 'HH:mm:ss M/d/yy', 'ua');
  types: typeOfCoupon[];

  constructor(
    private crud: CrudService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      dateControl: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      selectType: new FormControl(null, [Validators.required])
    })

    this.types = JSON.parse(localStorage.getItem('typesOfCoupon'));
    // console.log(formatDate(this.form.get('dateControl').value, 'HH:mm:ss d/MM/yy', 'ua'))

  }

  onSubmit() {
    this.status = false;

    const newCoupon: Coupon = {
      id: +(Date.now().toString().slice(10) + this.form.get('selectType').value.id),
      type: this.form.value.selectType,
      description: this.form.value.description,
      date: this.form.value.dateControl
    }
    console.log(newCoupon);
    if(this.crud.addCoupon(newCoupon) === false){
      this.status = true;
    }
  }
}
