import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Iuser } from '../shared-classes-and-types/Iuser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  users!:Iuser[]
  errMsg!:string

  constructor(private userService:UserService) { }
displayUsers(){
    this.userService.getAllUsers().subscribe(
      data=>{
       this.users=data;
      },
      error=>{
        this.errMsg= error.message;
      }
    )
  }
  ngOnInit(): void {
    this.displayUsers();
  
  }

}
