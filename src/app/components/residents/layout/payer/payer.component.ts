import {Component, Input, OnInit} from '@angular/core';
import {Residents} from '../../../../model_utils/models.interfaces';
import {CurrencyPipe, NgForOf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-payer',
  imports: [
    NgForOf,
    FormsModule,
    CurrencyPipe
  ],
  templateUrl: './payer.component.html',
  styleUrl: './payer.component.css'
})
export class PayerComponent implements OnInit {
  residents_opt!: Resident_opts[]
  @Input() residents!: Residents[]
  opt!: string
  using_credit: boolean = false
  payed_value: number = 0

  months_p: string[] = [];
  months_to_pay: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  month_selected: string = ''


  load_opts() {
    this.residents_opt = this.residents.map((rr) => {
      return {
        name: rr.name,
        amount: rr.amount_debit,
        value: rr.id
      } as Resident_opts
    })

  }

  ngOnInit() {
    this.load_opts()
  }

  on_opt_change() {
    console.log(this.opt);
  }

  rem_month(spec: string) {
    this.months_p = this.months_p.filter(mp => !mp.includes(spec))
  }

  change_month() {
    this.months_p.push(this.month_selected.substring(0, 3).toLowerCase())
  }
}

interface month{
  num:number,
  name:string
}

interface Resident_opts {
  name: string,
  amount: number,
  value: string
}
