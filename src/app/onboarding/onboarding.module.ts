import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StepperComponent } from './components/stepper/stepper.component';
import { FormComponent } from './components/form/form.component';
import { UserDataCardComponent } from './components/card/user-data-card/user-data-card.component';
import { AccountDataCardComponent } from './components/card/account-data-card/account-data-card.component';
import { OnboardingComponent } from './onboarding.component';
import { OnboardingService } from './services/onboarding.service';


@NgModule({
  declarations: [
    OnboardingComponent,
    StepperComponent,
    FormComponent,
    UserDataCardComponent,
    AccountDataCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    OnboardingService
  ]

})
export class OnboardingModule { }
