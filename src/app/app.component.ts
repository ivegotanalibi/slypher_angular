import { Component, OnInit } from '@angular/core';
//import { Customer } from './dummy';
//import { Customer } from './dummy';
import { Customer, CustomerService } from './dummyservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  	
  
  // customers1: Customer[];

  // customers2: Customer[];

  // selectedCustomer1: Customer;

  // selectedCustomer2: Customer;

  constructor() { }

  ngOnInit() {
      // this.customerService.getCustomersMedium().then(data => this.customers1 = data);
      // this.customerService.getCustomersMedium().then(data => this.customers2 = data);
     // console.log("wetin dey sup na");
  }

  }


