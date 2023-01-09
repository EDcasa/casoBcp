import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    // HttpClientTestingModule
  ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // HttpClientTestingModule
  ]
})
export class SharedModule { }
