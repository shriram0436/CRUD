import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: '', loadChildren: () => import('./components/component-routing.module').then(m => m.ComponentRoutingModule)},
  { path: '**', loadChildren: () => import('./components/component-routing.module').then(m => m.ComponentRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
