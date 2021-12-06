import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidateCPF } from 'src/app/shared/validators/cpf-validator';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output() formSubmissionData = new EventEmitter<string>();

  constructor() { }

  searchByCpfForm = new FormGroup({
    cpf: new FormControl('', [Validators.minLength(14), Validators.maxLength(14), ValidateCPF])
  });

  get cpf() {return this.searchByCpfForm.get('cpf')}

  submit(){
    this.formSubmissionData.emit(this.searchByCpfForm.get('cpf')?.value)
  }

  ngOnInit(): void {

    this.searchByCpfForm.controls['cpf'].valueChanges.subscribe(data => {
      let cpf = data.replace(/\D/g,"")
      cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
      this.searchByCpfForm.controls['cpf'].setValue(cpf, {emitEvent: false});
    });

  }


}
