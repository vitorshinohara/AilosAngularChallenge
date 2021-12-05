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
    cpf: new FormControl('', [Validators.minLength(11), Validators.maxLength(11), ValidateCPF])
  });

  get cpf() {return this.searchByCpfForm.get('cpf')}

    submit(){
      this.formSubmissionData.emit(this.searchByCpfForm.get('cpf')?.value)
     }

  ngOnInit(): void {
  }

}
