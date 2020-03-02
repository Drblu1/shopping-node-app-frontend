import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, OnDestroy {


  private subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
  }

  onSubmit(addProductForm: NgForm) {
    console.log(addProductForm);
    this.subscriptions.push(this.productService
      .onProductAdded(addProductForm.value.title)
      .subscribe(res => {
        this.router.navigate(['']);
      }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach( subscription => {
      subscription.unsubscribe();
    });
  }
}
