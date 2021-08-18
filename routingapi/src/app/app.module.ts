import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmpComponent } from './emp/emp.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { PnfComponent } from './pnf/pnf.component';
import { EmpupdateComponent } from './empupdate/empupdate.component';
import { EmpdeleteComponent } from './empdelete/empdelete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpComponent,
    EmpdetailComponent,
    PnfComponent,
    EmpupdateComponent,
    EmpdeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
