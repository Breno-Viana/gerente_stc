import { Component } from '@angular/core';
import {SidebarStateService} from '../../../../services/sidebar.service';
import {Router} from '@angular/router';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-reportpreview',
  imports: [
    MatTooltip
  ],
  templateUrl: './reportpreview.component.html',
  styleUrl: './reportpreview.component.css'
})
export class ReportPreviewComponent {


  constructor(private sidebarService:SidebarStateService, private router: Router) {
  }

  gotoReports(){
    this.sidebarService.setIndexOfNav(3)
    this.router.navigate(['/report'])
  }
}
