import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Customer } from './dummy';

export interface Country {
    name: string;
    code: string;
}

export interface Representative {
    name: string;
    image: string;
}
export interface Customer {
    id: number;
    name: number;
    country: Country;
    company: string;
    date: string;
    status: string;
    representative: Representative;
}

@Injectable({
    providedIn: 'root'
  })
export class CustomerService {


  
    constructor(private http: HttpClient) { }

    getCustomersMedium() {
        return this.http.get<any>('assets/dummy.json')
            
    }
}