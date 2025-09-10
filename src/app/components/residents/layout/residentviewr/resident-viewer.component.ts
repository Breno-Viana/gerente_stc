import {Component, OnInit} from '@angular/core';
import {Residents} from '../../../../model_utils/models.interfaces';
import {ResidentsService} from '../../../../services/residents.service';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-residentviewr',
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
  ],
  templateUrl: './resident-viewer.component.html',
  styleUrl: './resident-viewer.component.css'
})
export class ResidentViewerComponent{
  constructor(private residentService:ResidentsService) {
    this.display_show = residentService.findAll()
  }
  display_show:Residents[] = []
  search:string=''
  order:string= ''
  filter:string = ''

  options_order = [
    {value:'name', label:'Nome'},
    {value:'date', label:'Data'},
    {value:'months_np', label:'Meses devendo'},

  ]

  searchResident(){
    this.display_show = this.residentService.findBySpecName(this.search)
  }

  order_(){
    console.log(this.order);
  }
}
