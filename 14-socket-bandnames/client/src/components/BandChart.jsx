import { Chart, registerables } from 'chart.js';
import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
Chart.register(...registerables);

export const BandChart = () => {
  const { bandList } = useContext( SocketContext )

  const bandNames = bandList.map(band => band.name)
  const bandVotes = bandList.map(band => band.votes)

  const data = {
    labels: bandNames,
    datasets: [{
      label: '# of Votes',
      data: bandVotes,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }]
  }
  const config = {
    type: 'bar',
    data: data,
    options: {
      animation: false,
      indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }
 
  useEffect(() => {
    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );

    return () => {
      myChart.destroy()
    }
  }, [bandList])

  return (
    <>
      <canvas id="myChart" style={{ maxHeight: '350px' }}></canvas>
    </>
  )
}