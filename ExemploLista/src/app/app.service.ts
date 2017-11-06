import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Endereco } from './Endereco';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
@Injectable()
export class AppService {
  private _url = 'https://viacep.com.br/ws/'

  constructor(private _http: Http) { }

  getEntradas() {
    return this._http.get(this._url)
      .map(res => res.json());
}
  getEndereco(cep: string): Observable<Endereco> {
      return this._http.get(this._url)
      .map((response: Response)) => <Endereco>Response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError)

  }

  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }

}
