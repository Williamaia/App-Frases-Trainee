import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Frase } from '../shared/frase.model';
import { FrasesService } from '../shared/frases.service';

@Component({
  selector: 'app-add-frase',
  templateUrl: './add-frase.component.html',
  styleUrls: ['./add-frase.component.css']
})
export class AddFraseComponent implements OnInit {

  formAddFrase: FormGroup;

  constructor(private formBuilder: FormBuilder, private frasesService: FrasesService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.formAddFrase = this.formBuilder.group({
      titulo: [null, Validators.required],
      autor: [null, Validators.required],
      frase: [null, Validators.required],
      adicionado: [null, Validators.required],
    });
  }

  salvarFrase() {
    if (this.formAddFrase.invalid) {
      this.showError();
    }
    else {
      let frase = this.formAddFrase.value as Frase;
      this.frasesService.postFrase(frase);
      this.showSuccess();
    }
  }

  showSuccess() {
    this.toastr.success('Frase', 'Salvo com sucesso!');
  }

  showError() {
    this.toastr.error('Frase', 'Preencha as informações corretamente!');
  }

}
