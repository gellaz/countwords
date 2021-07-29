import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


export class User {
  constructor(
    public status: string,
  ) {
  }

}

@Injectable()
export class AppService {
  baseUrl = 'http://localhost:8080';
  authenticated = false;

  constructor(private http: HttpClient) {
  }

  countWords(text: string): Observable<Object> {
    let username = 'user'
    let password = 'password'
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.post(`${this.baseUrl}/`, text, {headers});
  }

  uploadFile(file: File): Observable<any> {
    let username = 'user'
    let password = 'password'
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    const formData = new FormData();
    formData.append('multipartFile', file, file.name);
    return this.http.post(`${this.baseUrl}/upload`, formData, {headers});
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get<User>(`${this.baseUrl}/validateLogin`, {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          return userData;
        }
      )
    );
  }
}
