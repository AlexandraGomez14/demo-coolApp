import { Component, Input } from '@angular/core';

@Component({
    selector:'app-product',
    template:`
                <h2>
                    <a [routerLink]="['/products',product.id]">{{product.name}}</a>
                </h2>
                <div>Precio: {{ product.price }}</div>
            `,
                
            
})
export class ProductComponent{
    //se creo esta propiedad para los datos que se estan usando arriba
    @Input()  product;
}