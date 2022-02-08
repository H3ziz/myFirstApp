import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../authen.service';
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
  constructor(private AuthenService: AuthenService) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.AuthenService.register(this.registerInfo).subscribe(
      {
        next:(result)=>{
          console.log(result)

          localStorage.setItem("user",JSON.stringify({email:this.registerInfo.email, passsword:this.registerInfo.password, name:this.registerInfo.name}))
        },
        error:(err)=> console.log(err)
      }
    )
  }
}
