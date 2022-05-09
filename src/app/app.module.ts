import { ArquivosModule } from './arquivos/arquivos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { ArquivosService } from './arquivos.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateModule,
    BrowserAnimationsModule,
    ArquivosModule
  ],
  providers: [
    ArquivosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
