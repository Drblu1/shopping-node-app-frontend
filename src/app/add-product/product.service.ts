import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  onProductAdded(value: string) {
    this.httpClient.post(
      `${environment.endpoint}/admin/add-product`,
      {test: 'my test'})
      .subscribe(response => {
        console.log('sent');
    });
  }
}
