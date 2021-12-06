import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { UserData } from '../models/user_data';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnboardingService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http : HttpClient) { }

   getUserDataByCpf(cpf : string) {
    return  this.http.get<UserData>("http://localhost:3000/queryByCpf", this.httpOptions)
  }

}
