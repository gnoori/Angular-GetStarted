import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of, map, catchError } from 'rxjs';
import { ProductService } from '../product.service';
import { IProduct, ProductResolved } from './product';
@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<ProductResolved> {
  constructor(private productService: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductResolved> {
    const id = route.paramMap.get('id');
    if (isNaN(Number(id))) {
      const message = `Product id was not a number: ${id}`;
      console.error(message);
      return of({ product: null, error: message });
    }
    return this.productService.getProduct(Number(id)).pipe(
      map((product) => ({ product: product })),
      catchError((error) => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({ product: null, error: message });
      })
    );
  }
}
