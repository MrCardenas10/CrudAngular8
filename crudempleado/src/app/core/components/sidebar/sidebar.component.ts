import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  toggleMenu1=false;
  toggleMenu2=false;
  toggleMenu3=false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenus(): void {
    this.toggleMenu1 = !this.toggleMenu1 
  }

  toggleMenuss(): void {
    this.toggleMenu2 = !this.toggleMenu2 
  }

  toggleMenusss(): void {
    this.toggleMenu3 = !this.toggleMenu3 
  }
}
