import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  onProductAdded(value: string): Observable<any> {
    return this.httpClient.post(
      `${environment.endpoint}/admin/add-product`,
      {title: value});
  }
}
