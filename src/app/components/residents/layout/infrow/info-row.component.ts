import {Component, OnInit} from '@angular/core';
import {ResidentsService} from '../../../../services/residents.service';

@Component({
  selector: 'app-infrow',
  imports: [],
  templateUrl: './info-row.component.html',
  styleUrl: './info-row.component.css'
})
export class InfoRowComponent implements OnInit{
  constructor(private residentService:ResidentsService) {
  }
  resident_qtn:number = 0 ;
  month_not_paid:number = 0;
  month_paid:number = 0;

  ngOnInit() {
    this.resident_qtn =this.residentService.getQntOfResidents()
    this.month_paid = this.residentService.getQntOfNotPaid()
    this.month_not_paid = this.residentService.getQntOfPaid()
  }

}
