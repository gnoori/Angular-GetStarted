import { Injectable } from '@angular/core';
import { IProduct } from './product-list/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //path to the data/database
  private productUrl = 'assets/products/products.json';

  //injecting HttpClient Service
  constructor(private httpService: HttpClient) {}

  //method to get the observable notification of products
  getProducts(): Observable<IProduct[]> {
    return this.httpService.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('ALL', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
