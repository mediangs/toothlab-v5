import {Component, Input, OnInit} from '@angular/core';
import {chartDefinitions} from '../shared/chart-definitions';
import {SpecimenService} from '../services/specimen.service';
import {DataService} from '../services/data.service';
import {ChartService} from '../services/chart.service';

@Component({
  selector: 'app-specimen-chart',
  templateUrl: './specimen-chart.component.html',
  styleUrls: ['./specimen-chart.component.css']
})
export class SpecimenChartComponent implements OnInit {

  @Input() specimenId;
  private sectionData;
  private chartTitle;
  private chartData;
  private chartOptions;
  private chartDefinitions;
  private selectedChartValue;

  constructor(private specimenService: SpecimenService,
              private chartService: ChartService,
              private dataService: DataService) {
    this.chartDefinitions = chartDefinitions;
    chartService.activeChart$.subscribe(id => {
      this.setChartDataAndOptions(id);
      this.selectedChartValue = chartDefinitions.find(data => data.id === id);
    });
  }

  ngOnInit() {

    this.specimenService
      .getSimpleSectionDataById(this.specimenId)
      .finally(() => {
        console.log('SpecimenChart data loaded.');
        this.chartService.setActiveChart(0); })
      .subscribe(data => this.sectionData = data );
  }

  private setChartDataAndOptions(chartId) {
    const v = chartDefinitions.find(data => data.id === chartId);
    this.chartTitle = v.title;
    this.chartData = this.setChartData(v.data.ref, v.data.cmps, v.data.subElement, v.data.limit);
    this.chartOptions = this.setChartOptions(v.options.xLabel, v.options.yLabel, v.options.yMax);
  }

  private setChartData(ref, cmps, subElement = null, limit ) {
    const retData = [];
    if (ref) {
      retData.push({
        values: this.sectionData.sections.map(d => [d.section,
          (limit && d.section > this.sectionData.model.evaluating_canal_furcation) ? null :
            subElement ? d[ref][subElement] : d[ref]]),
        key: 'pre'
      });
    }

    if (cmps) {
      Object.keys(this.sectionData.sections[0][cmps]).forEach(k => {
        retData.push({
          // checking null
          values: this.sectionData.sections.map(d => [d.section,
            typeof d[cmps][k] === 'undefined' ||
            (limit && d.section > this.sectionData.model.evaluating_canal_furcation) ? null :
              subElement ? d[cmps][k][subElement] : d[cmps][k]]),
          key: k
        });
      });
    }
    return retData;
  }

  private setChartOptions(xLabel, yLabel, yMax= null) {
    return {
      chart: {
        type: 'lineChart',
        height: 200,
        margin : {top: 20, right: 40, bottom: 40, left: 80},
        x: function(d) { return d[0]; },
        y: function(d) { return yMax ? ( d[1] ? Math.min(d[1], yMax) : null) : d[1]; },
        useInteractiveGuideline: true,
        xAxis: {
          axisLabel: xLabel
        },
        yAxis: {
          axisLabel: yLabel,
          tickFormat: function(d) { return d3.format('.02f')(d); },
          axisLabelDistance: -1
        },
        lines: {
          dispatch: {
            elementClick: e => this.dataService.setActiveSection(e[0].point[0])
          }
        }
      }
    };
  }
}
