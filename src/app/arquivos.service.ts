import { Arquivo } from './arquivos/arquivo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  constructor( private http: HttpClient) {
    this.http.
  }

  getArquivo() : Arquivo {
    let arquivo : Arquivo = new Arquivo();
    arquivo.filiais = 'Cabo de Santo Agostinho'
    arquivo.doc_01 = 'teste 01'
    return arquivo;
  }
}
