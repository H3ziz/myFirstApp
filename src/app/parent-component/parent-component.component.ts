import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.sass']
})
export class ParentComponentComponent implements OnInit {
  parentName:string="Abdelaziz";
  message:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
