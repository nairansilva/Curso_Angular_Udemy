import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css']
})
export class NgContainerComponent implements OnInit {
  users = [
    { login: 'nairan', role: 'admin', lastLogin: new Date('05/06/2021') },
    { login: 'Babi', role: 'user', lastLogin: new Date('05/06/2021') },
    { login: 'Raul', role: 'user', lastLogin: new Date('05/06/2021') },
    { login: 'Naira', role: 'admin', lastLogin: new Date('05/06/2021') },
    { login: 'Dan', role: 'user', lastLogin: new Date('05/06/2021') }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
