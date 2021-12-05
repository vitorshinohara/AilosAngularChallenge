import { Component, OnInit } from '@angular/core';

import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header-profile-icons',
  templateUrl: './header-profile-icons.component.html',
  styleUrls: ['./header-profile-icons.component.css']
})
export class HeaderProfileIconsComponent implements OnInit {
  
  faBell = faBell;

  constructor() { }

  ngOnInit(): void {
  }

}
