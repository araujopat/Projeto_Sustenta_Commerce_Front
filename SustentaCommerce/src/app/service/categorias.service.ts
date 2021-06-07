import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }
  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  getAllCategorias(): Observable<Categorias[]>{
    return this.http.get<Categorias[]>('https://sustentacommerce.herokuapp.com/categorias', this.token)
  }
  getByIdCategorias(id: number): Observable<Categorias>{
    return this.http.get<Categorias>(`https://sustentacommerce.herokuapp.com/id/${id}`, this.token)
  }
  getByDepartamentoCategorias(departamentoProduto: string):Observable<Categorias[]>{
    return this.http.get<Categorias[]>(`https://sustentacommerce.herokuapp.com/departamento/${departamentoProduto}`, this.token)

  }
  postCategorias(categorias: Categorias): Observable<Categorias>{
    return this.http.post<Categorias>('https://sustentacommerce.herokuapp.com/categorias', categorias, this.token)
  }
}
