import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    // loadChildren:'./Modules/pages/pages.module#PagesModule',
    loadChildren: () => import('./Modules/pages/pages.module').then(m => m.PagesModule)

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
