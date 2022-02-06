import {  Component, Input, OnInit, Output  ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-componant',
  templateUrl: './child-componant.component.html',
  styleUrls: ['./child-componant.component.sass']
})
export class ChildComponantComponent implements OnInit {
  @Input() parentData:string | undefined;
  @Output() chidEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  showName(){
    this.chidEvent.emit('Hello ' + this.parentData)
  }
}
