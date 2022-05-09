import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArquivosRoutingModule } from './arquivos-routing.module';
import { ArquivosFormComponent } from './arquivos-form/arquivos-form.component';



@NgModule({
  declarations: [
    ArquivosFormComponent
  ],
  imports: [
    CommonModule,
    ArquivosRoutingModule,
    FormsModule
  ], exports: [
    ArquivosFormComponent
  ]
})
export class ArquivosModule { }
