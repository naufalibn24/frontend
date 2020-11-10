import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AuthGuard } from './service/auth.guard';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  Shell.childRoutes([
    { path: 'test/about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) },
  ]),
  Shell.childRoutes([{ path: 'login', loadChildren: () => import('./login/login.module').then((m) => m.LoginModule) }]),
  Shell.childRoutes([
    { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
  ]),
  Shell.childRoutes([
    { path: 'home/register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
  ]),
  Shell.childRoutes([
    {
      path: 'profile',
      loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule),
      canActivate: [AuthGuard],
    },
  ]),
  Shell.childRoutes([
    {
      path: 'cart',
      loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule),
      canActivate: [AuthGuard],
    },
  ]),
  Shell.childRoutes([
    { path: 'home/detail', loadChildren: () => import('./detail/detail.module').then((m) => m.DetailModule) },
  ]),
  Shell.childRoutes([
    { path: 'produk/:id', loadChildren: () => import('./Produk/produk.module').then((m) => m.ProdukModule) },
  ]),
  Shell.childRoutes([
    {
      path: 'checkout',
      loadChildren: () => import('./checkout/checkout.module').then((m) => m.CheckoutModule),
      // canActivate: [AuthGuard],
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
