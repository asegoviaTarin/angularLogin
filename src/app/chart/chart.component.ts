import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'simple-chart',
  templateUrl: 'chart.component.html'
})
export class ChartComponent {
  @Input() data:any;

  constructor() {  
  }
  ngOnChanges() {
    this.options = {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Browser market shares in January, 2018'
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Brands',
          colorByPoint: true,
          data: this.data,
      }]
  }
  }
  options: Object;
}