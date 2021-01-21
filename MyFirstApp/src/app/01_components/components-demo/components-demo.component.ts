import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-components-demo',
  templateUrl: './components-demo.component.html',
  styleUrls: ['./components-demo.component.scss']
})
export class ComponentsDemoComponent implements OnInit {
  name:string|undefined;

  users: User[] = [
    { name : 'Arun Gupta',
      handle : '@arungupta',
      description : 'Description for Arun'
    },

    { name : 'Varun Sharma',
      handle : '@varunsharma',
      description : 'Description for Varun'
    },

    { name : 'Anuj Kumar',
      handle : '@anujkumar',
      description : 'Description for Anuj'
    },
];
  constructor() {}

  ngOnInit(): void {}

  onUserViewed(user: User){
    this.name = user.name;
    
  }

}
