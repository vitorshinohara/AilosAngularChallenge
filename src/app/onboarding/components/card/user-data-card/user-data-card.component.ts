import { Component, Input, OnInit } from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Account } from 'src/app/onboarding/models/account';
import { User } from 'src/app/onboarding/models/user';

@Component({
  selector: 'app-user-data-card',
  templateUrl: './user-data-card.component.html',
  styleUrls: ['./user-data-card.component.css']
})
export class UserDataCardComponent implements OnInit {

  @Input() user! : User
  
  faUser = faUser
  faCheckCircle = faCheckCircle

  constructor() { }

  ngOnInit(): void {
  }

}
