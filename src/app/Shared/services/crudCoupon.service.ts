import { Injectable } from '@angular/core';
import {Coupon} from "../interfaces/interfaces";
import {formatDate} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class CrudCouponService {

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
      elems.push(newCoupon);
      return localStorage.setItem('Data', JSON.stringify(elems))
    }

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

  removeElem(id: {id: number}){
    const editElem = JSON.parse(localStorage.getItem('Data'))
      .filter((elem: Coupon) => elem.id !== +id )
      localStorage.setItem(
        'Data',
        JSON.stringify(editElem)
      )
    return editElem
  }

}
