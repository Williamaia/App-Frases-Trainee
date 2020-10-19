import { Component, Input, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';

@Component({
  selector: 'app-item-frase',
  templateUrl: './item-frase.component.html',
  styleUrls: ['./item-frase.component.css']
})
export class ItemFraseComponent implements OnInit {

  @Input() frase: Frase;

  constructor() { }

  ngOnInit(): void {
  }

}
