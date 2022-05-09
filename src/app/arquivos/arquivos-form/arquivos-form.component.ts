import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../arquivos'

@Component({
  selector: 'app-arquivos-form',
  templateUrl: './arquivos-form.component.html',
  styleUrls: ['./arquivos-form.component.css']
})
export class ArquivosFormComponent implements OnInit {

  arquivo!: Arquivo;


  constructor() {
    this.arquivo = new Arquivo();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.arquivo)
  }

}
