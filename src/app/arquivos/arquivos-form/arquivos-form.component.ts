import { Component, OnInit } from '@angular/core';
import { Arquivo } from '../arquivos'

@Component({
  selector: 'app-arquivos-form',
  templateUrl: './arquivos-form.component.html',
  styleUrls: ['./arquivos-form.component.css']
})
export class ArquivosFormComponent implements OnInit {

  arquivo!: Arquivo;

  constructor() { }

  ngOnInit(): void {
  }

}
