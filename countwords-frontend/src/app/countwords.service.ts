import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountwordsService {
  private baseUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  countWords(text: string): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/count`, text);
  }

  uploadFile(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('multipartFile', file, file.name);
    return this.httpClient.post(`${this.baseUrl}/upload`, formData);
  }
}
