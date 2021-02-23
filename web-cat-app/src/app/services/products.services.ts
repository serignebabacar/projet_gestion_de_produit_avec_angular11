import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Product} from '../model/product.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
@Injectable({providedIn:"root"})
export class ProductService{

  constructor(private http:HttpClient) {

  }
  getAllProducts():Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products") ;
  }
  getSelectedProducts():Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?selected=true") ;
  }
  getAvailableProducts():Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?available=true") ;
  }
}
