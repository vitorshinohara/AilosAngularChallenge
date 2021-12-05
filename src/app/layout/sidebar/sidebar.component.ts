import { Component, OnInit } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // Icons
  faBars = faBars;
  faSearch = faSearch;
  faStar = faStar;
  faCommentAlt = faCommentAlt;
  faSlidersH = faSlidersH;
  faHome = faHome;

  constructor() { }

  ngOnInit(): void {
  }

}
