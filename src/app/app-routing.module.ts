import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/pokemon/create/create.component';
import { HomeComponent } from './pages/pokemon/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'create', component: CreateComponent},
  { path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
