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
    //let host = (Math.random()>0.1)?environment.host:environment.unreachableHost
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
  searchProducts(keyword:string):Observable<Product[]>{
    let host = environment.host
    return this.http.get<Product[]>(host+"/products?name_like="+keyword) ;
  }
  select(product:Product):Observable<Product>{
    let host = environment.host
    product.selected = !product.selected;
    return this.http.put<Product>(host+"/products/"+product.id,product) ;
  }
  deleteProduct(product:Product):Observable<void>{
    let host = environment.host;
    return this.http.delete<void>(host+"/products/"+product.id) ;
  }
}
