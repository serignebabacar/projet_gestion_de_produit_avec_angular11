import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/products.services';
import { Product } from '../../model/product.model';
import {Observable,of} from 'rxjs';
import { map,startWith, catchError} from 'rxjs/operators';
import { DataStateEnum ,AppDataState} from '../../state/product.state';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products$ :Observable<AppDataState<Product[]>> |null=null;
    readonly DataStateEnum=DataStateEnum;

    constructor(private productService:ProductService) {

    }

  ngOnInit(): void {
  }
  onGetAllProduct(){
    this.products$ =
     this.productService.getAllProducts().pipe(
       map(data =>({dataState:DataStateEnum.LOADED,data:data})),
       startWith({dataState:DataStateEnum.LOADING}),
       catchError(err=>of({dataState:DataStateEnum.ERROR,errorMessage:err.message}))
     );
  }
}
