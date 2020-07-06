import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsProductComponent } from './products/details-product/details-product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductListComponent } from './products/product-list/product-list.component';

//aquí se colocaran las rutas de los componentes
//se pasa los objetos
//path --> es como el alias como se mirara o buscara el usuario
//component llamar el componente que se ha creado
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: DetailsProductComponent},
  {path: 'cli', component: ClientesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
