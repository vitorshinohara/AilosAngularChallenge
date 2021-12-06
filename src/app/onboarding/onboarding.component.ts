import { Component,  OnInit } from '@angular/core';
import { Account } from './models/account';
import { UserData } from './models/user_data';
import { OnboardingService } from './services/onboarding.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {
  buttonsToDisplay: string[] = ["onboarding_tips"]
  userData : UserData | undefined
  accounts : Account[] | undefined
  isLoading: boolean = false

  constructor(private onboardingService : OnboardingService) { }

  loadCpfData(cpf : string) {
    this.isLoading = true
    this.onboardingService.getUserDataByCpf(cpf).subscribe( response => {
      this.userData = response
      this.accounts = response.account
      this.buttonsToDisplay = ["onboarding", "onboarding_tips"]
      this.isLoading = false
    } )
    
  }
  
  ngOnInit(): void {
  }
}