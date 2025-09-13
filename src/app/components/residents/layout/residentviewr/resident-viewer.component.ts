import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Residents} from '../../../../model_utils/models.interfaces';
import {ResidentsService} from '../../../../services/residents.service';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-residentviewr',
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    MatTooltip,
  ],
  templateUrl: './resident-viewer.component.html',
  styleUrl: './resident-viewer.component.css'
})
export class ResidentViewerComponent  {
  constructor(private residentService: ResidentsService) {
    this.order = 'name'
    this.order_()
    this.order = 'default'
    this.order_()



    this.filter = 'on_time'
    this.filter_()
    this.filter = 'default'
    this.filter_()
  }

  @Input() original_order: Residents[] = []
  @Input() display_show: Residents[] = []
  search: string = ''
  order: string = 'Padrão'
  filter: string = 'Padrão'

  options_order = [
    {value: 'name', label: 'Nome'},
    {value: 'date', label: 'Data'},
    {value: 'month_np', label: 'Meses devendo'},
    {value: 'default', label: 'Padrão'}
  ]

  options_filter = [
    {value: 'on_time', label: 'Em dia'},
    {value: 'non_time', label: 'Devendo'},
    {value: 'default', label: 'Padrão'}
  ]

  searchResident() {
    this.display_show = this.residentService.findBySpecName(this.search)
  }

  order_() {
    if (this.order !== 'default') {
      this.display_show = this.residentService.order([...this.display_show], this.order);
    } else {
      this.display_show = [...this.original_order];
    }
  }

  filter_() {
    if (this.filter !== 'default'){
      this.display_show = this.residentService.filter(this.original_order, this.filter)
    }else{
      this.display_show = [...this.original_order]
    }
  }


  @Output() notifier_edit = new EventEmitter<Residents>()
  notifyEdit(obj:Residents){
    this.notifier_edit.emit(obj)
  }

  @Output() notifier_calc = new EventEmitter<Residents>()
  notifyCalc(obj:Residents){
    this.notifier_calc.emit(obj)
  }

}
