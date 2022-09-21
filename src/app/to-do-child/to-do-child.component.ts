import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-child',
  templateUrl: './to-do-child.component.html',
  styleUrls: ['./to-do-child.component.scss']
})
export class ToDoChildComponent implements OnInit {
  // @Input() checkedd:any;
  @Output () todo=new EventEmitter();
  inputData:string=''
  
  
  constructor() {}

  ngOnInit(): void {
  }
  onbtnsubmit(){
    // console.log('clicked');
    // this.inputArr.push(this.inputData);
    this.todo.emit(this.inputData);
    console.log(this.inputData);
    
  }

}
