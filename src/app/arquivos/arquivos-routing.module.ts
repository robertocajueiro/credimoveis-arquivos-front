import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArquivosFormComponent } from './arquivos-form/arquivos-form.component'
import { ArquivosTableComponent } from './arquivos-table/arquivos-table.component'

const routes: Routes = [
  { path: 'arquivos-form', component: ArquivosFormComponent },
  { path: 'arquivos-table', component: ArquivosTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArquivosRoutingModule { }
