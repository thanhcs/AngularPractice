import { Component, OnInit } from '@angular/core';

class MenuItem {
  constructor(public caption: string, public link: any[]) { }
}

@Component({
  selector: 'ideatank-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      { caption: 'Popular', link: ['ideas/idea-list/popular'] },
      { caption: 'New', link: ['ideas/idea-list/new'] },
      { caption: 'Idea Detail', link: ['ideas/idea-detail']}
    ];
  }

}
