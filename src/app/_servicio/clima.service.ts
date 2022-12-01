import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  key = '973b236b2b3960d742c475bdb7a40f12';
  //https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  clima(ciudad: string): Observable<any>{
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&mode=json&units=metric&appid=${this.key}`); 
  }
  constructor(private http: HttpClient) { }
}
