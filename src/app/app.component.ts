import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tabs';
  searchTerm;
  tabs = [{
    id : 1,
    tabName : "super-admin",
  },{
    id : 2,
    tabName : "recruiter",
  },{
    id : 3,
    tabName : "employeer",
  },{
    id : 4,
    tabName : "admin",
  },{
    id : 4,
    tabName : "enterprise",
  }];

  clickedTab(tabName){
    console.log("clickedTab : ",tabName);
  }

  selectValue(){
    console.log("",this.searchTerm);
  }

}
