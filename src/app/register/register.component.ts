import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../Validation/confirmPassword.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerInfo = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    hearAboutUs: ''
  }
  registerForm = this.fb.group({
    name:['', [Validators.required, Validators.pattern(/^[A-Za-z]{3,20}$/)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required]],
    confirmPassword:['',[Validators.required]],
    hearAboutUs:['', [Validators.required]],
  }, {validator:[ConfirmPasswordValidator]})
  constructor(private AuthenService: AuthenService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  getErrors(field:string){
    return this.registerForm.get(field)?.errors
  }
  getField(field:string){
    return this.registerForm.get(field)
  }
  
  onRegister(){
    this.AuthenService.register(this.registerForm.value).subscribe(
      {
        next:(result)=>{
          console.log(result)

          // localStorage.setItem("user",JSON.stringify({email:this.registerInfo.email, passsword:this.registerInfo.password, name:this.registerInfo.name}))
        },
        error:(err)=> console.log(err)
      }
    )
  }
}
