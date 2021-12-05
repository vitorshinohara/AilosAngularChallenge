import { AbstractControl } from "@angular/forms";

export function ValidateCPF(control: AbstractControl): {[key: string]: any} | null  {
    
    var cpf = control.value

    cpf = cpf.replace(/[\s.-]*/igm, '')
    
    if (cpf.length !== 11 || !Array.from(cpf).filter(e => e !== cpf[0]).length) {
        return {"sameDigits": true}
    }

    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return {"isValid": false}
    
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return {"isValid": false}

    return null;
  }