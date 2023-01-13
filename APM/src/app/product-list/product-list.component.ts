import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from './product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  imgWidth: number = 20;
  imgMargin: number = 20;
  showImage: boolean = false;
  sub!: Subscription;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  private _filter: string = '';
  errorMessage = '';
  //getter
  get filter(): string {
    return this._filter;
  }
  //setter
  set filter(filterValue: string) {
    this._filter = filterValue;
    this.filteredProducts = this.filter
      ? this.performFilter(this.filter)
      : this.products;
  }
  filteredProducts: IProduct[] = [];

  products: IProduct[] = [];

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
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
    this.filter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.showImage =
      this.route.snapshot.queryParamMap.get('showImage') === 'true';
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.filter);
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
