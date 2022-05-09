import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArquivosService } from './arquivos.service';
import { ArquivosModule } from './arquivos/arquivos.module';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
