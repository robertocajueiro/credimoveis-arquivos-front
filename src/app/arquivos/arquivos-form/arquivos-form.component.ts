import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../arquivo'
import { ArquivosService } from '../../arquivos.service';

@Component({
  selector: 'app-arquivos-form',
  templateUrl: './arquivos-form.component.html',
  styleUrls: ['./arquivos-form.component.css']
})
export class ArquivosFormComponent implements OnInit {

  arquivo!: Arquivo;


  constructor( private service: ArquivosService ) {
    this.arquivo = service.getArquivo();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.arquivo)
  }

}
