import {Component, OnInit} from '@angular/core';
import {SidebarStateService} from '../../../../services/sidebar.service';
import {Router} from '@angular/router';
import {MatTooltip} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {ResidentsService} from '../../../../services/residents.service';
import {NgIf} from '@angular/common';
import {Residents} from '../../../../model_utils/models.interfaces';

@Component({
  selector: 'app-residentspreview',
  imports: [
    MatTooltip,
    MatTableModule,
    NgIf
  ],
  templateUrl: './residentspreview.component.html',
  styleUrl: './residentspreview.component.css'
})
export class ResidentsPreviewComponent implements OnInit{
  constructor(private stateService: SidebarStateService,
              private router: Router,
              private residentService:ResidentsService) {
  }

  dataSource:any;
  displayColumn = ['Nome', 'Ultimo Pagamento', 'Em Dia']

  gotoResidents() {
    this.router.navigate(['/residents'])
    this.stateService.setIndexOfNav(1)
  }


  ngOnInit(){
    this.dataSource = this.residentService.findAll()
  }

  changeSituation(element:any){
    const resident = (element as Residents)
    this.residentService.updateOnTime(resident)
  }
}
