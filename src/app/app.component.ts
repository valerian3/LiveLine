import {Component, OnInit} from '@angular/core';
import {Coupon} from "./Shared/interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  initTestData(){
    const newCoupons: Coupon[] = [
      { id: 1, type: "Сertificate", description: "driver's license",     date: new Date(new Date().getTime() + 10* 1000) },
      { id: 2, type: "Inform", description: "Need social help",    date: new Date(new Date().getTime() + 20* 1000)  },
      { id: 3, type: "Health", description: "Credential for work", date: new Date(new Date().getTime() + 30* 1000)  },
      { id: 4, type: "Inform", description: "Need credential",     date: new Date(new Date().getTime() + 13* 1000)  },
      { id: 5, type: "Health", description: "Need credential",     date: new Date(new Date().getTime() + 14* 1000)  },
      { id: 6, type: "Work",   description: "Сertificate about salary", date: new Date(new Date().getTime() + 15* 1000)  },
      { id: 7, type: "Health", description: "Need credential",     date: new Date(new Date().getTime() + 16* 1000)  },
      { id: 8, type: "Inform", description: "Need credential",     date: new Date(new Date().getTime() + 17* 1000)  },
      { id: 9, type: "Health", description: "Need credential",     date: new Date(new Date().getTime() + 18* 1000)  },
      { id: 10, type: "Health", description: "Need credential",     date: new Date(new Date().getTime() + 19* 1000)  },
    ]
      localStorage.setItem('Data', JSON.stringify(newCoupons));
      localStorage.setItem('LastId', (10).toString());
  }

  ngOnInit(): void {
    this.initTestData()
  }
}
