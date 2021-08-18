import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';
import { NestedComponent } from './nested/nested.component';
import { GenderPipe } from './gender.pipe';
import { TaxPipe } from './tax.pipe';
import { CallapiComponent } from './callapi/callapi.component';

@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    NestedComponent,
    GenderPipe,
    TaxPipe,
    CallapiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,AnotherComponent]
})
export class AppModule { }
