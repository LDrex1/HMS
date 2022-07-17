let propertyTabBtns = document.querySelectorAll('.property-tab-btn');
let propertyTabPage = document.querySelector('.property-tab-page');

propertyTabBtns.forEach(tabBtn => {
  tabBtn.addEventListener("click",function() {
    for (let i = 0; i < propertyTabBtns.length; i++) {
      propertyTabBtns[i].classList.remove('active');
      propertyTabPage.classList.add('hide');
      
    }

    let pageTarget = document.querySelector(`${tabBtn.dataset.page}`);

    setTimeout(() => {  
        tabBtn.classList.add('active');
        AOS.init();
        pageTarget.classList.remove('hide');
    }, 500);
    
  });
});

var options = {
  chart: {
    height: 150,
    type: 'radialBar',
  },
  series: [70],
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 2,
        size: "30%"
      },
      dataLabels: {
        showOn: "always",
        name: {
          show: false
        },
        value: {
          show: false
        }
      }
    }
  },
  responsive: [{
    breakpoint: 991.99,
    options: {
      chart: {
        height: 200,
      }
    }
  }],
  labels: ['Progress'],
}
  
  var chart = new ApexCharts(document.querySelector("#new-booking"), options);
  chart.render();

//   var options = {
//     series: [7, 3],
//     chart: {
//     type: 'donut',
//     width: 60,
// },
//   dataLabels: {
//     enabled: false
// },
//    responsive: [{
//      breakpoint: 992,
//      options: {
//         chart: {
//             width: 100,
//         },
//         dataLabels: {
//             enabled: false
//         },
//         legend: {
//          show: false
//        }
//      }
//    }],

//   };

//   var chartTwo = new ApexCharts(document.querySelector("#scheduled-rooms"), options);
//   chartTwo.render();

// var options = {
//     series: [8, 2],
//     chart: {
//         type: 'donut',
//         width: 60,
//     },
//     dataLabels: {
//         enabled: false
//     },
//    responsive: [{
//      breakpoint: 992,
//      options: {
//        chart: {
//          width: 300
//        },
//        legend: {
//          show: false
//        }
//      }
//    }],

// };

//   var chartThree = new ApexCharts(document.querySelector("#check-in"), options);
//   chartThree.render();

//   var options = {
//     series: [9, 1],
//     chart: {
//     type: 'donut',
//     width: 60,
// },
//   dataLabels: {
//     enabled: false
// },
//    responsive: [{
//      breakpoint: 992,
//      options: {
//        chart: {
//          width: 100
//        },
//        dataLabels: {
//     enabled: false
// },
//        legend: {
//          show: false
//        }
//      }
//    }],

//   };

//   var chartFour = new ApexCharts(document.querySelector("#check-out"), options);
//   chartFour.render();