import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-onboarding-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output() formSubmissionData = new EventEmitter<string>();

  constructor() { }

  searchByCpfForm = new FormGroup({
    cpf: new FormControl('')
  });

  get cpf() {return this.searchByCpfForm.get('cpf')}

  //  submit(formData: NgForm){
  //    this.formSubmissionData.emit("")
  //   }

  ngOnInit(): void {
  }

}
