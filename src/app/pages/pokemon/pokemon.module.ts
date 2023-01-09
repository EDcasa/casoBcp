import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    //ReactiveFormsModule,
    //HttpClientModule,
    SharedModule
  ]
})
export class PokemonModule { }
