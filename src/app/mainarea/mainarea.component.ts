import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainarea',
  template:'<h3></h3>',
  templateUrl: './mainarea.component.html',
  styleUrls: ['./mainarea.component.scss']
})
export class MainAreaComponent implements OnInit{
  // title:any;
  username:any;
  // isdisabled:boolean=true;
  isActive:boolean=true;
  inActive:boolean=true;
  constructor(){}
  ngOnInit(): void {
  }
  onbtn(){
    // this.isdisabled=true;
    this.username=!this.username;
    this.username='';
    
    // console.log(this.title);
  }
  // oninput(event:any){
  //   this.isdisabled=false;
  //   // this.title=event.target.value 
  //   console.log(event);
  //   }

}
