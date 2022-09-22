import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import{UserslistComponent } from './userslist/userslist.component';
import { ToDoChildComponent } from './to-do-child/to-do-child.component';


const routes: Routes = [
  {
    path:'aboutus',
    component:AboutusComponent,
    children:[{
      path:'userslist',
      component:UserslistComponent,
    }]
  },
  {
    path:'to-do-child',
    component:ToDoChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
