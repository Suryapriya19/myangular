import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @Input() item!:any;
  // newItem='car';

  // @Output() addNewItem= new EventEmitter();

  @Input() user:any;
  @Input() userIndex!:number;
  @Output() removeEvent=new EventEmitter();
  

  constructor() { }

  ngOnInit(): void {
  }
//  addItem(){
//   this.addNewItem.emit(this.newItem);
//  }

removeUser(){
    // console.log('clicked',userInd);
    // this.usersList.splice(userIndex,1);
    this.removeEvent.emit(this.userIndex);
    
  }

}
