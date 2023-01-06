import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from './product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  title: string = 'Product List';
  imgWidth: number = 20;
  imgMargin: number = 20;
  showImage: boolean = false;
  sub!: Subscription;
  constructor(private productService: ProductService) {}

  private _filter: string = '';
  errorMessage = '';
  //getter
  get filter(): string {
    return this._filter;
  }
  //setter
  set filter(filterValue: string) {
    this._filter = filterValue;
    console.log('In setter', filterValue);
    this.filteredProducts = this.performFilter(filterValue);
  }
  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  onRatingClick(message: string): void {
    this.title = 'Product List ' + message;
  }
  toggleImage(): void {
    //will set it true if false, if false set it tpo true
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
