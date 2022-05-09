import { Arquivo } from './arquivos/arquivo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArquivosService {

  constructor( private http: HttpClient) {

  }

  salvar( arquivo: Arquivo) : Observable<Arquivo> {
    return this.http.post<Arquivo>('http://localhost:8080/api/arquivos', arquivo)
  }

  getArquivo() : Arquivo {
    let arquivo : Arquivo = new Arquivo();
    arquivo.filiais = 'Cabo de Santo Agostinho'
    arquivo.doc_01 = 'teste 01'
    return arquivo;
  }
}
