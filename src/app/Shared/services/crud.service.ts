import { Injectable } from '@angular/core';
import {Coupon} from "../interfaces/interfaces";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor() { }

  fetch(n: Number): Array<Coupon>{
    return JSON.parse(localStorage.getItem('Data')).sort(function(a,b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }).slice(0,n)
  }

  // addCoupon(newCoupon: Coupon){
  //   const newElem = JSON.parse(localStorage.getItem('Data'));
  //   newElem.push(newCoupon)
  //   console.log(newElem, 'wait');
  //   return localStorage.setItem('Data', JSON.stringify(newElem))
  // }

  addCoupon(newCoupon: Coupon){
    const elems = JSON.parse(localStorage.getItem('Data'));
    if (this.verifyData(elems, newCoupon) === true){
      console.log('no wait')
      elems.push(newCoupon);
      return localStorage.setItem('Data', JSON.stringify(elems))
    }

    console.log(elems, 'wait');
    return false;
  }

  verifyData(elems, newCoupon){
    const newCouponDataUp = formatDate((newCoupon.date).getTime() + 5 *60*1000, 'HH:mm:ss, d/MM/yy', 'ua')
    const newCouponDataDown = formatDate((newCoupon.date).getTime() - 5 *60*1000, 'HH:mm:ss, d/MM/yy', 'ua')
    let status = true
    elems.forEach((element, idx) => {
      const elementDate = formatDate(element.date, 'HH:mm:ss, d/MM/yy', 'ua');
      if(elementDate > newCouponDataDown && elementDate < newCouponDataUp){
        status = false;
        // console.log(formatDate(element.date, 'HH:mm:ss, d/MM/yy', 'ua'), newCoupon.date)
      }
    })
    return status;
  }

}
