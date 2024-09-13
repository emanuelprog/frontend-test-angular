import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Establishment } from '../models/establishment.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  private baseUrl = '/establishments';

  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.http.get<Establishment[]>(environment.ambiente + this.baseUrl, { headers: headers, observe: 'response' });
  }

  getById(id: string): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.baseUrl}/${id}`);
  }

  create(establishment: Establishment): Observable<Establishment> {
    return this.http.post<Establishment>(this.baseUrl, establishment);
  }

  update(id: string, establishment: Establishment): Observable<Establishment> {
    return this.http.put<Establishment>(`${this.baseUrl}/${id}`, establishment);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
