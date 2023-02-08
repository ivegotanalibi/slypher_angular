import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { todoDTO } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = environment.apiURL + '/ToDo';
  constructor(private http : HttpClient) { }

  public getById(id : number) : Observable<todoDTO>{
    return this.http.get<todoDTO>(`${this.apiUrl}/${id}`);
  }

  public getall() : Observable<todoDTO[]>{
    return this.http.get<todoDTO[]>(this.apiUrl);
  }

  // public filter(values : any): Observable<any>{
  //   const params = new HttpParams({fromObject: values});
  //   return this.http.get<movieDTO[]>(`${this.apiUrl}/filter` , {params, observe: 'response'});
  // }

  // public getHomePageMovies() : Observable<homeDTO>{
  //   return this.http.get<homeDTO>(this.apiUrl);
  // }

  // public putGet(id: number): Observable<MoviePutGetDTO> {
  //   return this.http.get<MoviePutGetDTO>(`${this.apiUrl}/putget/${id}`);
  // }

  // public edit(id : number , movieCreation : movieCreationDTO){
  //   const formData = this.buildForm(movieCreation);
  //   return this.http.put(`${this.apiUrl}/${id}`, formData);
  // }

  // public postGet() : Observable<moviePostGetDTO>{
  //   return this.http.get<moviePostGetDTO>(`${this.apiUrl}/postget`);
  // }

  public create(todo : todoDTO) : Observable<number>{         
    // const formData = this.buildForm(movieCreation);
    return this.http.post<number>(this.apiUrl , todo);
  }

  
  public delete(id : number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
