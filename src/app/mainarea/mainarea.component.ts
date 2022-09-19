import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  template:'<h3></h3>',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.scss']
})
export class MainAreaComponent implements OnInit{
  // title:any;
  username!:string;
  // isdisabled:boolean=true;
  isActive:boolean=true;
  inActive:boolean=true;
  // cars=['ford','tata','rolls royce','triber','kia']
  cars=[{'id':1,'name':'ford','color':'blue'},{'id':2,'name':'tata','color':'silver'},{'id':3,'name':'rolls royce','color':'royal blue'},{'id':4,'name':'kia','color':'red'}]
  constructor(){}
  ngOnInit(): void {
  }
  onbtn(){
    // this.isdisabled=true;
    
    this.username='';
    
    // console.log(this.title);
  }
  // oninput(event:any){
  //   this.isdisabled=false;
  //   // this.title=event.target.value 
  //   console.log(event);
  //   }

}
