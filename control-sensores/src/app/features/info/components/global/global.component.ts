import { Component, OnInit } from '@angular/core';
import { IeFirestoreService } from '../../../../core/ie-firestore.service';
import { Info } from '../../interfaces/interface';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  data: Info[];
  chartData: any;
  chartDataTemperatura: any;
  chartDataHumedad: any;
  chartDataLuz: any;
  chartDataDistancia: any;
  chartDataVentiladores: any;

  constructor(private dataService: IeFirestoreService) {}

  ngOnInit(): void {
    this.dataService.getAll().subscribe(data => {
      this.data = data;
      this.processData();
    });
  }

  processData(): void {
    const groupedData = this.groupData(this.data, 3); // Agrupar datos cada 3 lecturas

    const categories = groupedData.map((_, index) => `Data ${index + 1}`);
    const temperatura = groupedData.map(group => this.average(group.map(item => item.temperatura)));
    const humedad = groupedData.map(group => this.average(group.map(item => item.humedad)));
    const luz = groupedData.map(group => this.average(group.map(item => item.luz)));
    const distancia = groupedData.map(group => this.average(group.map(item => item.distancia)));
    const ventiladores = groupedData.map(group => this.any(group.map(item => item.ventiladores)));

    this.chartDataTemperatura = {
      labels: categories,
      datasets: [
        { label: 'Temperatura', fill: true,backgroundColor: 'rgba(0,0,220,0.2)',data: temperatura, borderColor: '#1E88E5' }
      ]
    };

    this.chartDataHumedad = {
      labels: categories,
      datasets: [
        { label: 'Humedad', fill: true,backgroundColor: 'rgba(255,167,38,0.2)',data: humedad, borderColor: '#FFC107' }
      ]
    };

    this.chartDataLuz = {
      labels: categories,
      datasets: [
        { label: 'Luz',fill: true,backgroundColor: 'rgba(119,163,69,0.2)', data: luz, borderColor: '#4CAF50' }
      ]
    };

    this.chartDataDistancia = {
      labels: categories,
      datasets: [
        { label: 'Distancia',fill: true,backgroundColor: 'rgba(220,0,0,0.2)', data: distancia, borderColor: '#FF5722' }
      ]
    };


    this.chartData = {
      labels: categories,
      datasets: [
        { label: 'Temperatura',borderDash: [5, 5], data: temperatura, borderColor: '#1E88E5', type: 'line' },
        { label: 'Humedad',borderDash: [5, 5],data: humedad, borderColor: '#FFC107', type: 'line' },
        { label: 'Luz',borderDash: [5, 5], data: luz, borderColor: '#4CAF50', type: 'line' },
        { label: 'Distancia', borderDash: [5, 5],data: distancia, borderColor: '#FF5722', type: 'line' },
      ]
    };

  }

  groupData(data: Info[], chunkSize: number): Info[][] {
    const groups = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      groups.push(data.slice(i, i + chunkSize));
    }
    return groups;
  }

  average(numbers: number[]): number {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
  }

  any(booleans: boolean[]): boolean {
    return booleans.some(b => b);
  }
}
