import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlnitakComponent} from './alnitak/alnitak.component';


const routes: Routes = [
  {
    path: '',
    component: AlnitakComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
