import { Injectable } from '@angular/core';
import { Frase } from './frase.model';

@Injectable({
  providedIn: 'root'
})
export class FrasesService {

  public frases: Array<Frase> = new Array<Frase>();
  public tituloApp: string = "Meu app frases";
  constructor() { }

  getFrases() {
    this.listaFrases().forEach(frase => {
      this.frases.push({
        titulo: frase.titulo,
        autor: frase.autor,
        frase: frase.frase,
        adicionado: frase.adicionado
      });
    });
  }

  postFrase(frase: Frase){
    this.frases.push(frase);
  }

  listaFrases() {
    return [
      {
        "titulo": "Tornou-se",
        "frase": "Tornou-se chocantemente óbvio que a nossa tecnologia excedeu a nossa humanidade.",
        "autor": "Albert Einstein",
        "adicionado": "15/10/2020"
      },
      {
        "titulo": "Seja qual for",
        "frase": "Seja qual for o país, capitalista ou socialista, o homem foi em todo o lado arrasado pela tecnologia, alienado do seu próprio trabalho, feito prisioneiro, forçado a um estado de estupidez.",
        "autor": "Simone de Beauvoir",
        "adicionado": "16/10/2020"
      },
      {
        "titulo": "Steve",
        "frase": "Trocava toda a minha tecnologia por uma tarde com Sócrates.",
        "autor": "Steve Jobs",
        "adicionado": "17/10/2020"
      },
      {
        "titulo": "Regra tecnologia",
        "frase": "A primeira regra de qualquer tecnologia utilizada nos negócios é que a automação aplicada a uma operação eficiente aumentará a eficiência. A segunda é que a automação aplicada a uma operação ineficiente aumentará a ineficiência.",
        "autor": "Bill Gates",
        "adicionado": "18/10/2020"
      },
      {
        "titulo": "TESTE 1",
        "frase": "LORELM IPSUM LOREM",
        "autor": "Luiz Lopes",
        "adicionado": "15/10/2020"
      }
    ];
  }
}
