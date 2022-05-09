import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquivosFormComponent } from './arquivos-form/arquivos-form.component'

const routes: Routes = [
  { path: 'arquivos-form', component: ArquivosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquivosRoutingModule { }
