import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  subjects = [{title:'test'}];

  constructor(private api: ApiService) {
    this.getSubjects();
    
  }
  getSubjects= ()=> {
    this.api.getAllSubjects().subscribe(
      data => {
     this.subjects=data;
      },
    error => {
      console.log(error);
    }
    );
  }
}
