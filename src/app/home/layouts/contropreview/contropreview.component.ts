import {Component, inject, OnInit} from '@angular/core';
import {Chart} from 'chart.js/auto'
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {Router, RouterLink} from '@angular/router';
import {SidebarStateService} from '../../../../services/sidebar.state';

@Component({
  selector: 'app-contropreview',
  imports: [
    MatTooltip,
  ],
  templateUrl: './controlpreview.component.html',
  styleUrl: './controlpreview.component.css'
})
export class ControlPreviewComponent implements OnInit {
  async ngOnInit() {

    const {dadosFinanceiros} = await import('../../../../mock/data.mock')
    const {despesasMensais} = await import('../../../../mock/data.mock')
    const {residentes} = await import('../../../../mock/data.mock')

    const labels = dadosFinanceiros.map(dt => dt.mes)
    const entradas = dadosFinanceiros.map(st => st.entradas)
    const saidas = dadosFinanceiros.map(st => st.saidas)

    new Chart('chart_line', {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Entradas',
            data: entradas,
            backgroundColor: 'rgba(57,255,20,0.1)',
            borderWidth: 1,
            borderColor: '#9aeb1a',
            fill: true
          },
          {
            label: 'Saidas',
            data: saidas,
            backgroundColor: 'rgba(255,7,58,0.1)',
            borderWidth: 1,
            borderColor: '#eb3f1a',
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })

    const teste = despesasMensais[1]
    const data = [teste.tesouraria, teste.limpeza, teste.alimentacao, teste.patrimonio, teste.diversos]
    new Chart('chart_pie', {
      type: 'pie',
      data: {
        labels: ['Alimentação', 'Limpeza', 'Patrimônio', 'Tesouraria', 'Diversos'],
        datasets: [{
          label: `Gastos do mês de ${teste.mes}`,
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
          hoverOffset: 5
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

    const res = residentes.map(nome => nome.nome)
    const meses = residentes.map(me => me.totalMeses)
    new Chart('chart_donut', {
      type: 'bar',
      data: {
        labels: res,
        datasets: [
          {
            label: 'Meses em atraso',
            data: meses,
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


  protected indexService;

  constructor(indexService: SidebarStateService) {
    this.indexService = indexService
  }

  private router = inject(Router)

  gotoControl() {
    this.router.navigate(['/control'])
    this.indexService.setIndexOfNav(2)
  }
}
