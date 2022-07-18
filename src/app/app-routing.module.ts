import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/pokemon/create/create.component';
import { ListComponent } from './pages/pokemon/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent},
  { path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
