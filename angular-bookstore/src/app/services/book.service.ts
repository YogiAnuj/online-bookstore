import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/api/v1/book';
  constructor(private httpClient: HttpClient) { }

  getBooks(categoryId: number): Observable<Book[]> {
    //console.log('Hello',categoryId);
    
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${categoryId}`;
    return this.httpClient.get<GetResponseBooks>(searchUrl).pipe(
      map(response => response._embedded.book)
    );
  }
}

interface GetResponseBooks {
  _embedded: {
    book: Book[];
  };
}
