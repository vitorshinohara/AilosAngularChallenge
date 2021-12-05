import { Component, Input, OnInit } from '@angular/core';

import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Account } from 'src/app/onboarding/models/account';

@Component({
  selector: 'app-account-data-card',
  templateUrl: './account-data-card.component.html',
  styleUrls: ['./account-data-card.component.css']
})
export class AccountDataCardComponent implements OnInit {
  faCreditCard = faCreditCard;

  @Input() account!: Account;
  constructor() { }

  ngOnInit(): void {
  }

}
