import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpComponent } from './emp/emp.component';
import { EmpdeleteComponent } from './empdelete/empdelete.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';
import { HomeComponent } from './home/home.component';
import { PnfComponent } from './pnf/pnf.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'emp',component:EmpComponent},
  {path:'emp/:id',component:EmpdetailComponent},
  {path:'empupdate/:id',component:EmpupdateComponent},
  {path:'empdelete/:id',component:EmpdeleteComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PnfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
