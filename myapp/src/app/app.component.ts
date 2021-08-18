import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Laasya';
  games=["Hockey","Football","Tennis"];
  emp={'eid':101,'ename':'Shannu'}
  emps=[
    {'eid':101,'ename':'Chandh','sal':89000,'gender':'F','retired':false,'doj':new Date("1999-01-12")},
    {'eid':102,'ename':'Priya','sal':95000,'gender':'F','retired':true,'doj':new Date("1985-04-07")},
    {'eid':103,'ename':'Sai','sal':57000,'gender':'F','retired':false,'doj':new Date("2013-05-02")},
    {'eid':104,'ename':'MSK','sal':45000,'gender':'M','retired':false,'doj':new Date("2015-01-09")},
    {'eid':105,'ename':'Ramesh','sal':89000,'gender':'M','retired':true,'doj':new Date("1991-03-08")}
  ]
  constructor(){
    this.name="Sai Laasya"
  }
}
