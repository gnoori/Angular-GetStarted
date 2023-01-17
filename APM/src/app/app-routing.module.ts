import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './user/auth.guard';
import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectiveStrategyService } from './selective-strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        { path: 'welcome', component: WelcomeComponent },
        {
          path: 'products',
          canActivate: [AuthGuard],
          data: { preload: false },
          loadChildren: () =>
            import('./product-list/product.module').then(
              (m) => m.ProductModule
            ),
        },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ],
      { preloadingStrategy: SelectiveStrategyService }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
