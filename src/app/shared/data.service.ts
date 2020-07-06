import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //creacion de propiedad -> tipo array
  private  products = [{
                        id: 1, 
                        name: 'Monitor', 
                        category: 'Electrodomestico', 
                        price: 250.0, 
                        description: 'En buen estado'
                       },
                       {
                        id: 2, 
                        name: 'Mouse', 
                        category: 'Informatica', 
                        price: 15.0, 
                        description: 'Mouse gammer con un comodidas explendida'
                       },
                       {
                        id: 3, 
                        name: 'CPU', 
                        category: 'Informatica', 
                        price: 550.00, 
                        description: 'CPU con una alta capacidad para la ejecución de juegos'
                       }
                      ];

  //creacion de metodo
  getAllProduct(){
    return this.products;
  }

  getProductById(id){
    //se creara un filter de javascript para buscar un id de producto
    return this.products.filter((products) => products.id  == id);
  }
}
