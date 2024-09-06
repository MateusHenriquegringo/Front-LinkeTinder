import { LocalStorage } from "./LocalStorage.js";

declare const Chart: any

document.addEventListener('DOMContentLoaded', function () {
  
  const ctx = document.getElementById('myChart') as HTMLCanvasElement

  const competenciasData : {[key:string] : number} = LocalStorage.candidatosByCompetencia()

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(competenciasData),
      datasets: [{
        label: 'Numero de candidatos que dominam',
        data: Object.values(competenciasData),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)'
        ],

        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          tricks: {
            stepSize: 1
          }
        }
      }
    }
  });
});