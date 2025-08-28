import {Component, inject, input} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SidebarStateService} from '../../services/sidebar.state';


@Component({
  selector: 'app-sidebar',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  protected sidebarService;
  constructor(indexService:SidebarStateService) {
    this.sidebarService = indexService
  }

  buttons = [
    {name: 'tela inicial', icon: 'assets/home.png', route: '/home'},
    {name: 'residents', icon: 'assets/residents.png', route: '/residents'},
    {name: 'controle', icon: 'assets/control.png', route: '/control'},
    {name: 'relatório', icon: 'assets/report.png', route: '/report'}]


  change(index:number){
    this.sidebarService.setIndexOfNav(index)
  }


}
