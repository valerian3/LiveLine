import { Injectable } from '@angular/core';
import {typeOfCoupon} from "../interfaces/interfaces";

@Injectable({
  providedIn: 'root'
})
export class CrudTypeOfCouponService {

  constructor() { }

  fetch(){
    return JSON.parse(localStorage.getItem('typesOfCoupon'))
  }

  edit(result: string, id: number){
    const edit: typeOfCoupon[] = JSON.parse(localStorage.getItem('typesOfCoupon')).filter(elem => {
      if(elem.id !== id){
        return elem
      }else {
        return elem.nameOfType = result
      }
     });
    localStorage.setItem('typesOfCoupon', JSON.stringify(edit))
  }

  delete(id: number){
    const forDelete: typeOfCoupon[] = JSON.parse(localStorage.getItem('typesOfCoupon')).filter(elem => elem.id !== id);
    localStorage.setItem('typesOfCoupon', JSON.stringify(forDelete))
  }

  add(element: string){
    let edit: typeOfCoupon[] = JSON.parse(localStorage.getItem('typesOfCoupon'));
    const newType: typeOfCoupon = {
      id: +Date.now().toString().slice(9),
      code: edit.length,
      nameOfType: element
    }
    edit = [...edit, newType]
    localStorage.setItem('typesOfCoupon', JSON.stringify(edit))
  }
}
