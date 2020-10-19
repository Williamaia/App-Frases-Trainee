import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FrasesService } from '../shared/frases.service';

@Component({
  selector: 'app-lista-frases',
  templateUrl: './lista-frases.component.html',
  styleUrls: ['./lista-frases.component.css']
})
export class ListaFrasesComponent implements OnInit {

  public frases: Array<Frase>

  constructor(public frasesServico: FrasesService) { }

  ngOnInit(): void {
    this.frasesServico.getFrases();
    this.frases = this.frasesServico.frases;
  }

}
