import React from "react";
import Chart from 'react-apexcharts';
import '../../css/Profile/Rank.css'

export default function Rank() {
  const radialData = {
    series: [20], //퍼센트 양
    options: {
      chart: { type: 'radialBar', },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '30px',
              offsetY: 10,
              color: '#CD7F32' // 안쪽 글자 색깔
            },
            value: {
              show: false,
            },
          }
        },
      },
      labels: ['Bronze'], // 등급이 여기서 바뀜
      fill: {
        colors: ['#CD7F32'] //트랙 색깔
      },
      grid: {
        padding: {
          top: -30,
          right: 0,
          bottom: -30,
          left: 0
        }
      }
    },
  }
  //비기너(0) ,브론즈(20 / #CD7F32), 실버(40 / #C0C0C0), 골드(60 / #ffbf00), 다이아몬드(80 / #b9f2ff), 루비(100 / #E0115F)
  
  return (
    <div className="rank_root">
      <div className="rank">
        <h5 className="rank_title">Rank</h5>
        <div>
          <Chart
            options={radialData.options} series={radialData.series} type="radialBar" height='350'
          />
        </div>
      </div>
    </div>
  );
}