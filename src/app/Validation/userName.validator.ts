import { AbstractControl, ValidatorFn } from "@angular/forms";

export function userNameValidator(userName:RegExp):ValidatorFn{
    return (control:AbstractControl)=>{
            const forbidden = userName.test(control.value);
            return forbidden ? {'notValid userName':true} : null
    }
} 