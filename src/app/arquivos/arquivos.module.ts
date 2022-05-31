import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ArquivosRoutingModule } from './arquivos-routing.module';
import { ArquivosFormComponent } from './arquivos-form/arquivos-form.component';
import { ArquivosTableComponent } from './arquivos-table/arquivos-table.component'




@NgModule({
  declarations: [
    ArquivosFormComponent,
    ArquivosTableComponent
  ],
  imports: [
    CommonModule,
    ArquivosRoutingModule,
    FormsModule
  ], exports: [
    ArquivosFormComponent,
    ArquivosTableComponent
  ]
})
export class ArquivosModule { }
