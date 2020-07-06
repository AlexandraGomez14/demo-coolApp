import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//importacion de locacion javascript
import { Location } from '@angular/common';

//importamos service
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  //se declara como una variable vacía
  public  products = {};

  //inyectamos el service
  constructor(private route: ActivatedRoute,
              private dataSvc: DataService,
              private location:Location) { }

  ngOnInit(): void {
    //el id que se coloca aqui es traido del parametro de la vista
    const productId = this.route.snapshot.paramMap.get('id');
    this.products = this.dataSvc.getProductById(productId);
    console.log('productId', productId);
  }

  onGoBack() {
    this.location.back();
  }

}
