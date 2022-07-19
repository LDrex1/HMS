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
  colors: ["#6C5DD3"],
  plotOptions: {
    radialBar: {
      offsetX: 70,
      offsetY: -12,
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
    breakpoint: 1300,
    options: {
      plotOptions: {
        radialBar: {
          offsetX: 50,
          offsetY: -12
        }
      }
    }
  },
  {
    breakpoint: 1150,
    options: {
      chart: {
        height: 115,
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          hollow: {
            size: "20%"
          }
        }
      }
    }
  },
  {
    breakpoint: 991.99,
    options: {
      chart: {
        height: 200,
      },
      plotOptions: {
        radialBar: {
          offsetX: 20,
          offsetY: -29,
          hollow: {
            size: "30%"
          }
        }
      }
    }
  },
  {
    breakpoint: 767.99,
    options: {
      plotOptions: {
        radialBar: {
          offsetX: 55,
          offsetY: -29
        }
      }
    }
  },
  {
    breakpoint: 499.99,
    options: {
      plotOptions: {
        radialBar: {
          offsetX: 25
        }
      }
    } 
  },
  {
    breakpoint: 399.99,
    options: {
      plotOptions: {
        radialBar: {
          offsetX: 5
        }
      }
    } 
  }],
  labels: ['Progress'],
}
  
  var chart = new ApexCharts(document.querySelector("#new-booking"), options);
  chart.render();

  var options = {
    chart: {
      height: 150,
      type: 'radialBar',
    },
    series: [65],
    colors: ["#FD8539"],
    plotOptions: {
      radialBar: {
        offsetX: 70,
        offsetY: -12,
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
      breakpoint: 1300,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 50,
            offsetY: -12
          }
        }
      }
    },
    {
      breakpoint: 1150,
      options: {
        chart: {
          height: 115,
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            hollow: {
              size: "20%"
            }
          }
        }
      }
    },
    {
      breakpoint: 991.99,
      options: {
        chart: {
          height: 200,
        },
        plotOptions: {
          radialBar: {
            offsetX: 20,
            offsetY: -29,
            hollow: {
              size: "30%"
            }
          }
        }
      }
    },
    {
      breakpoint: 767.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 55,
            offsetY: -29
          }
        }
      }
    },
    {
      breakpoint: 499.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 25
          }
        }
      } 
    },
    {
      breakpoint: 399.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 5
          }
        }
      } 
    }],
    labels: ['Progress'],
  }

  var chartTwo = new ApexCharts(document.querySelector("#scheduled-rooms"), options);
  chartTwo.render();

  var options = {
    chart: {
      height: 150,
      type: 'radialBar',
    },
    series: [85],
    colors: ["#2ED480"],
    plotOptions: {
      radialBar: {
        offsetX: 70,
        offsetY: -12,
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
      breakpoint: 1300,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 50,
            offsetY: -12
          }
        }
      }
    },
    {
      breakpoint: 1150,
      options: {
        chart: {
          height: 115,
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            hollow: {
              size: "20%"
            }
          }
        }
      }
    },
    {
      breakpoint: 991.99,
      options: {
        chart: {
          height: 200,
        },
        plotOptions: {
          radialBar: {
            offsetX: 20,
            offsetY: -29,
            hollow: {
              size: "30%"
            }
          }
        }
      }
    },
    {
      breakpoint: 767.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 55,
            offsetY: -29
          }
        }
      }
    },
    {
      breakpoint: 499.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 25
          }
        }
      } 
    },
    {
      breakpoint: 399.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 5
          }
        }
      } 
    }],
    labels: ['Progress'],
  }

  var chartThree = new ApexCharts(document.querySelector("#check-in"), options);
  chartThree.render();

  var options = {
    chart: {
      height: 150,
      type: 'radialBar',
    },
    series: [55],
    colors: ["#FE6D8E"],
    plotOptions: {
      radialBar: {
        offsetX: 70,
        offsetY: -12,
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
      breakpoint: 1300,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 50,
            offsetY: -12
          }
        }
      }
    },
    {
      breakpoint: 1150,
      options: {
        chart: {
          height: 115,
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            hollow: {
              size: "20%"
            }
          }
        }
      }
    },
    {
      breakpoint: 991.99,
      options: {
        chart: {
          height: 200,
        },
        plotOptions: {
          radialBar: {
            offsetX: 20,
            offsetY: -29,
            hollow: {
              size: "30%"
            }
          }
        }
      }
    },
    {
      breakpoint: 767.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 55,
            offsetY: -29
          }
        }
      }
    },
    {
      breakpoint: 499.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 25
          }
        }
      } 
    },
    {
      breakpoint: 399.99,
      options: {
        plotOptions: {
          radialBar: {
            offsetX: 5
          }
        }
      } 
    }],
    labels: ['Progress'],
  }

  var chartFour = new ApexCharts(document.querySelector("#check-out"), options);
  chartFour.render();

  var options1 = {
    chart: {
      height: 250,
      type: "radialBar",
    },
    series: [85, 90, 70, 80, 70],
    plotOptions: {
      radialBar: {
        offsetX: 50,
        hollow: {
          size: "30%"
        },
        dataLabels: {
          total: {
            show: false,
            label: '100%',
            value: {
              show: false
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          plotOptions: {
            radialBar: {
              offsetX: 20,
              offsetY: 15
            }
          }
        }
      },
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            radialBar: {
              offsetX: 20,
              offsetY: 0
            }
          }
        }
      },
      {
        breakpoint: 550,
        options: {
          plotOptions: {
            radialBar: {
              offsetX: 5
            }
          }
        }
      },
      {
        breakpoint: 470,
        options: {
          chart: {
            height: 220,
          },
          plotOptions: {
            radialBar: {
              offsetX: 0
            }
          }
        }
      },
      {
        breakpoint: 390,
        options: {
          chart: {
            height: 180,
          },
          plotOptions: {
            radialBar: {
              offsetX: 0
            }
          }
        }
      }],
    labels: ['Others', 'Digital Ads', 'Websites', 'Friends', 'Social Media']
  };
  
  new ApexCharts(document.querySelector("#referrals"), options1).render();
  

  var options6 = {
    series: [{
      type: "line",
      name: "Check-in",
      data: [410, 312, 358, 510, 540, 350, 280, 390, 602]
    },
    {
      type: "line",
      name: "Check-out",
      data: [400, 280, 312, 328, 420, 500, 270, 410, 348]
    }],
    chart: {
    height: 213,
    type: 'line',
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  // tooltip: {
  //   followCursor: false,
  //   intersect: true
  // },
  stroke: {
    curve: 'smooth',
    width: 1
  },
  colors: ["#BB251A", "#AF13AF"],
  title: {
    text: 'Overview',
    align: 'left'
  },
  grid: {
    padding: {
      left: 0,
      right: 0
    }
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right'
  },
  xaxis: {
    categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  }
  };

  var lineChart = new ApexCharts(document.querySelector("#line-chart"), options6);
  lineChart.render();

  var options7 = {
    series: [{
    data: [88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88, 88]
  }],
    chart: {
    type: 'bar',
    height: 216,
    stacked: false,
    stackType: '100%'
  },
  colors: ["#AF13AF"],
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      columnWidth: 30,
      distributed: true,
    }
  },
  stroke: {
    lineCap: "round"
  },
  grid: {
    padding: {
      left: 0,
      right: 0
    }
  },
  xaxis: {
    categories: ['06', '07', '08', '09', '10', '11',
      '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27'
    ],
  },
  fill: {
    opacity: 1
  },
  legend: {
    show: false,
    position: 'right',
    offsetX: 0,
    offsetY: 50
  },
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), options7);
  barChart.render();