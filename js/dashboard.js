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
      height: 280,
      type: "radialBar",
    },
    series: [85, 90, 70, 80, 70],
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D', 'TEAM E']
  };
  
  new ApexCharts(document.querySelector("#referrals"), options1).render();
  