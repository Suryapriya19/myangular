import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'myangular';
  // itemDetails={'itemId':1,'itemName':'car'}
  // item=['item1','item2']
  // newItemEmitted(event:any){
  //   this.item.push(event);
  //   console.log(event);
    
  // }
  inputArr:Array<string>=[];
  isChecked:boolean=true;

  getEvent(event:string){
    this.inputArr.push(event)
  }
  onremove(remInd:number){
    this.inputArr.splice(remInd,1)
  }




}
