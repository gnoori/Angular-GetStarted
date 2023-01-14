import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductResolverService } from './product-resolver.service';
import { SharedModule } from '../shared/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditInfoComponent } from './product-edit/product-edit-info.component';
import { ProductEditTagsComponent } from './product-edit/product-edit-tags.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: 'products',
        children: [
          { path: '', component: ProductListComponent },
          {
            path: ':id',
            component: ProductDetailComponent,
            resolve: { resolvedData: ProductResolverService },
          },
          {
            path: ':id/edit',
            component: ProductEditComponent,
            resolve: { resolvedData: ProductResolverService },
            children: [
              { path: '', redirectTo: 'info', pathMatch: 'full' },
              { path: 'info', component: ProductEditInfoComponent },
              { path: 'tags', component: ProductEditTagsComponent },
            ],
          },
        ],
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
