import {Component, OnInit} from '@angular/core';
import {Coupon, typeOfCoupon} from "./Shared/interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  initTestData(){
    const typesOfCoupon: typeOfCoupon[] = [
      {id: 1, code: 1, nameOfType: 'Сertificate'},
      {id: 2, code: 2, nameOfType: 'Inform'},
      {id: 3, code: 3, nameOfType: 'Health'},
      {id: 4, code: 4, nameOfType: 'Work'}
    ]

    const newCoupons: Coupon[] = [
      { id: 1, type: {id: 1, code: 1, nameOfType: 'Сertificate'}, description: "Driver's license",     date: new Date(new Date().getTime() + 1* 60* 1000) },
      { id: 2, type: {id: 2, code: 2, nameOfType: 'Inform'}, description: "Health consultation",    date: new Date(new Date().getTime() + 2* 60* 1000)  },
      { id: 3, type: {id: 1, code: 1, nameOfType: 'Сertificate'}, description: "Credential for work", date: new Date(new Date().getTime() + 3* 60* 1000)  },
      { id: 4, type: {id: 2, code: 2, nameOfType: 'Inform'}, description: "Need credential",     date: new Date(new Date().getTime() + 4* 60* 1000)  },
      { id: 5, type: {id: 3, code: 3, nameOfType: 'Health'}, description: "Need credential",     date: new Date(new Date().getTime() + 5* 60* 1000)  },
      { id: 6, type: {id: 4, code: 4, nameOfType: 'Work'},   description: "Сertificate about salary", date: new Date(new Date().getTime() + 6* 60* 1000)  },
      { id: 7, type: {id: 3, code: 3, nameOfType: 'Health'}, description: "Need credential",     date: new Date(new Date().getTime() + 7* 60* 1000)  },
      { id: 8, type: {id: 2, code: 2, nameOfType: 'Inform'}, description: "Need credential",     date: new Date(new Date().getTime() + 8* 60* 1000)  },
      { id: 9, type: {id: 2, code: 2, nameOfType: 'Inform'}, description: "Health consultation",     date: new Date(new Date().getTime() + 9* 60* 1000)  },
      { id: 10, type: {id: 1, code: 1, nameOfType: 'Сertificate'}, description: "For swimming in the pool",     date: new Date(new Date().getTime() + 10* 60* 1000)  },
      { id: 88, type: {id: 2, code: 2, nameOfType: 'Inform'}, description: "Need credential",     date: new Date(new Date().getTime() + 11* 60* 1000)  },
      { id: 90, type: {id: 2, code: 2, nameOfType: 'Inform'}, description: "Health consultation",     date: new Date(new Date().getTime() + 12* 60* 1000)  },
      { id: 100, type: {id: 1, code: 1, nameOfType: 'Сertificate'}, description: "For swimming in the pool",     date: new Date(new Date().getTime() + 13* 60* 1000)  },
    ]

    const test: Coupon[] = JSON.parse(localStorage.getItem('Data'))
    if(test === null || test.length === 0){
      localStorage.setItem('Data', JSON.stringify(newCoupons));
      localStorage.setItem('typesOfCoupon', JSON.stringify(typesOfCoupon));
    }
  }

  ngOnInit(): void {
    this.initTestData()
  }
}
