import {Component, OnInit} from '@angular/core';
import {SidebarStateService} from '../../../../services/sidebar.service';
import {Router} from '@angular/router';
import {MatTooltip} from '@angular/material/tooltip';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {Reports} from '../../../../model_utils/models.interfaces';
import {DocumentsService} from '../../../../services/documents.service';


@Component({
  selector: 'app-reportpreview',
  imports: [
    MatTooltip,
    FormsModule,
    NgForOf,
    NgIf,
  ],
  templateUrl: './reportpreview.component.html',
  styleUrl: './reportpreview.component.css'
})
export class ReportPreviewComponent implements OnInit{
  constructor(private sidebarService: SidebarStateService,
              private router: Router,
              private docService: DocumentsService) {
  }
  showLb:boolean = true
  value:string = ''
  data_display: Reports[] | undefined

  gotoReports() {
    this.sidebarService.setIndexOfNav(3)
    this.router.navigate(['/report'])
  }
  ngOnInit() {
    this.data_display = this.docService.findAll()
  }

  find(){
    this.data_display = this.docService.findAllBySpecs(this.value)
  }

  showCalendar(){
    const input = document.getElementById('date_ipt') as HTMLInputElement

    if (input){
      input.showPicker()
    }
  }

  sayHello(){
    console.log('aaaaaaaaaaaaaaaaaaaaaa')
  }
  edit(){
    console.log('aaaaaaaaaaaaaaaaa');
  }
}
