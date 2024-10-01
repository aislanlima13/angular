import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { LivrosResultado, Item } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  search(inputValue: string): Observable<Item[]> {
    const params = new HttpParams().append('q', inputValue);
    return this.http.get<LivrosResultado>(this.API, {params}).pipe(
      tap((retornoAPI) => console.log('tap console', retornoAPI)),
      map(resultado => resultado.items)
    );
  }
}
