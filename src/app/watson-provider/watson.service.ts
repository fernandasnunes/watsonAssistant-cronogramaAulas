import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {  Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatsonService {
  private headers: Headers;
  private options: RequestOptions;
  constructor(private http: Http) {
    this.headers = new Headers({'Content-Type': 'application/json', 'Accept':'application/json', 'Access-Control-Allow-Origin': '*'});
    this.options = new RequestOptions({ headers: this.headers });
   }

  postWatson(body){
    console.log(body)
    return new Promise((resolve, reject) => {
      this.http.post("https://assistantcredentials.mybluemix.net/assistant ", body, this.options)
        .pipe(map (res=> res))
        .subscribe(data => {
          resolve(data.json())
        }, error => {
          console.log(error)
          reject(error)
        });
    });
  }
}


