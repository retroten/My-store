import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createProductDTO, updateProductDTO, Product } from 'src/app/models/product.model';
import { id } from 'date-fns/locale';
import { HttpParams } from '@angular/common/http';
import {} from './../../environments/environment'
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.API_URL}//api/products`;
  constructor(
    private http: HttpClient
  ) { }

getAllProducts(limit?:number, offset?: number){
let params = new HttpParams();
if(limit && offset){
  params = params.set('limit', limit);
  params = params.set('offset', offset);
}
  return this.http.get<Product[]>(this.apiUrl, {params});
}
getProduct(id:string){
  return  this.http.get<Product>(`${this.apiUrl}/${id}`)
}

// getProductsByPage(limit:number, offset: number){
//   return this.http.get<Product[]>(`${this.apiUrl}`, {params: {limit, offset}
// })
// }


create(dto: createProductDTO){
  return this.http.post<Product>(this.apiUrl, dto)
}
update(id:string, dto: updateProductDTO){
  return this.http.put<Product>(`${this.apiUrl}/${id}`, dto)
}
delete(id: string){
  return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
}
}
