import {Component, inject, OnInit} from '@angular/core';
import {Chart} from 'chart.js/auto'
import {MatTooltip} from '@angular/material/tooltip';
import {Router} from '@angular/router';
import {SidebarStateService} from '../../../../services/sidebar.service';
import {ControlService} from '../../../../services/control.service';
import {ResidentsService} from '../../../../services/residents.service';
import {Balances, DepartamentBalance, Residents} from '../../../../model_utils/models.interfaces';

@Component({
  selector: 'app-contropreview',
  imports: [
    MatTooltip,
  ],
  templateUrl: './controlpreview.component.html',
  styleUrl: './controlpreview.component.css'
})
export class ControlPreviewComponent implements OnInit {

  private monthExpense:DepartamentBalance[] = []
  private residents:Residents[] = []
  private balance:Balances[] = []


  protected indexService;
  constructor(indexService: SidebarStateService,
              private controlService: ControlService,
              private residentService: ResidentsService) {
    this.indexService = indexService
  }

  private router = inject(Router)

  gotoControl() {
    this.router.navigate(['/control'])
    this.indexService.setIndexOfNav(2)
  }

  ngOnInit() {

    this.monthExpense = this.controlService.getMonthExpense()
    this.balance = this.controlService.getFinanceData()
    this.residents = this.residentService.findAll()
    this.rendererChart()
  }

  rendererChart() {
    const labels = this.balance.map(bl => bl.month)
    const entries = this.balance.map(bl => bl.entries)
    const exits = this.balance.map(bl => bl.exits)

    new Chart('chart_line', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Entradas',
            data: entries,
            backgroundColor: 'rgba(57,255,20,0.1)',
            borderWidth: 1,
            borderColor: '#9aeb1a',
            fill: true
          },
          {
            label: 'Saidas',
            data: exits,
            backgroundColor: 'rgba(255,7,58,0.1)',
            borderWidth: 1,
            borderColor: '#eb3f1a',
            fill: true
          }
        ]
      },
      options: {
        animation: {},
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })

    const teste = this.monthExpense[1]
    const data = [teste.treasury, teste.hygiene_departament, teste.food_departament, teste.heritage_departament, teste.others]
    new Chart('chart_pie', {
      type: 'pie',
      data: {
        labels: ['Alimentação', 'Limpeza', 'Patrimônio', 'Tesouraria', 'Diversos'],
        datasets: [{
          label: `Gastos do mês de ${teste.month}`,
          data: data,
          backgroundColor: [
            'rgba(0,255,255,0.6)',
            'rgba(57,255,20,0.6)',
            'rgba(255,7,58,0.6)',
            'rgba(255,211,0,0.6)',
            'rgba(188,19,254,0.6)'
          ],
          borderWidth: 2,
          borderColor: '#111',
          hoverOffset: 15
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 15,
              padding: 15,
              usePointStyle: true
            }
          }

        }
      }
    })

    const resd = this.residents.map(rs => rs.name)
    const months = this.residents.map(me => me.months_not_paid)
    new Chart('chart_bar', {
      type: 'bar',
      data: {
        labels: resd,
        datasets: [
          {
            label: 'Meses em atraso',
            data: months,
            backgroundColor: [
              'rgba(0,255,255,0.6)',
              'rgba(57,255,20,0.6)',
              'rgba(255,7,58,0.6)',
              'rgba(255,211,0,0.6)',
              'rgba(188,19,254,0.6)'
            ],
            borderWidth: 1,
            borderColor: '#fff',
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    })
  }
}
