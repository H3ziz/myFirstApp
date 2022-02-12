import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { userNameValidator } from '../Validation/userName.validator';
 
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {
  isDiscount = false;
  notesForm=this.fb.group({
    name:['', [Validators.required, userNameValidator(/^admin$/), userNameValidator(/^adminstrator$/)]],
    discount: [''],
    comments:this.fb.array([])
  })

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  toggleInput(){
    this.isDiscount = !this.isDiscount;
    if(!this.isDiscount){
      this.notesForm.get('discount')?.clearValidators()
    }else{
      this.notesForm.get('discount')?.setValidators(Validators.required)

    }
    this.notesForm.get('discount')?.updateValueAndValidity()
  }
get comment(){
return (this.notesForm.get('comments') as FormArray)
}
  addComment(){
   this.comment.push(this.fb.control(""))
  }
}

