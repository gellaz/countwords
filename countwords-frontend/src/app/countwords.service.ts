import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountwordsService {
  private baseUrl = "http://localhost:8080/count"

  constructor(private httpClient: HttpClient) {}

  countWords(text: string): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}`, text);
  }
}
