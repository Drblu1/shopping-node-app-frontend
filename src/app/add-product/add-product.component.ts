import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
  }

  onSubmit(addProductForm: NgForm) {
    console.log(addProductForm);
    this.productService.onProductAdded(addProductForm.value.title);
    this.router.navigate(['add-product']);
  }
}
