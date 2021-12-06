import { Component, OnInit } from '@angular/core';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-profile-icons',
  templateUrl: './header-profile-icons.component.html',
  styleUrls: ['./header-profile-icons.component.css']
})
export class HeaderProfileIconsComponent implements OnInit {
  
  faBell = faBell;
  faCog = faCog;

  constructor() { }

  ngOnInit(): void {
  }

}
