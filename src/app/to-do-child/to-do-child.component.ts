import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-to-do-child',
  templateUrl: './to-do-child.component.html',
  styleUrls: ['./to-do-child.component.scss']
})
export class ToDoChildComponent implements OnInit {
  // @Input() checkedd:any;
  @Output () todo=new EventEmitter();
  inputData:string='';
  
  
  constructor(private router:Router,private route:ActivatedRoute ) {}

  ngOnInit(): void {
    this.router.navigate(['/aboutus/userslist'])
  }

  onbtnsubmit(){
    // console.log('clicked');
    // this.inputArr.push(this.inputData);
    this.todo.emit(this.inputData);
    console.log(this.inputData);
    
  }

}

