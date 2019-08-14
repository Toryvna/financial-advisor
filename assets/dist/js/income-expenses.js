$(document).ready(function(){
    new Chartist.Line('#chart5', {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        series: [{
            name: 'series-1',
            data: [0, 500, 1000, 1400, 2140, 2200, 2600, 2700, 3000, 3100, 3150, 3300]
        }, {
            name: 'series-2',
            data: [0, 300, 700, 900, 1400, 1550, 1700, 1960, 2000, 2410, 2500, 2800]
        }],
      }, {
        fullWidth: true,
        height: 300,
        onlyInteger: true,
        showGrid: false,
        chartPadding: {
            top: 20,
            right: 0,
            bottom: 20,
            left: 10
        },
        series: {
            'series-1': {
                showArea: true,
                showPoint: false
            },
            'series-2': {
                showArea: true,
                showPoint: false
            },
        },
        plugins: [
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: "месяц",
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 49
                    },
                    textAnchor: "middle"
                },
                axisY: {
                    axisTitle: "тыс. руб.",
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: -3
                    },
                    flipTitle: false
                }
            })
        ],
      },[
        ['screen and (min-width: 768px)', {
            chartPadding: {
                left: 30,
            },
        }]
    ]);

    new Chartist.Bar('#chart6', {
        series: [
            [1600],
            [700],
            [700]
        ]
    }, {
        stackBars: true,
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        fullWidth: true,
        chartPadding: {
            bottom: 50,
        },
        axisY: {
          offset: 0
        },
        plugins: [
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: "Доходы за год, тыс. руб.",
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 50
                    },
                    textAnchor: "middle"
                }
            })
        ],
    });

    new Chartist.Bar('#chart7', {
        series: [
            [1400],
            [300],
            [200]
        ]
    }, {
        stackBars: true,
        seriesBarDistance: 10,
        reverseData: true,
        horizontalBars: true,
        fullWidth: true,
        chartPadding: {
            bottom: 50,
        },
        axisY: {
          offset: 0
        },
        plugins: [
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: "Расходы за год, тыс. руб.",
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 50
                    },
                    textAnchor: "middle"
                }
            })
        ],
    });

    // chart8 и chart9 связаны между собой
    new Chartist.Bar('#chart8', {
        labels: ['С основного места работы', 'Недвижимость', 'Инвестиции'],
    
        // значения задаются следующим образом:
        //      series: [
        //          [1000, 200, 100], - тут указывается кол-во поинтов, которые будут закрашены, начиная с начальной точки
        //          [0, 1000, 1200] - тут указывается начальная точка
        //      ]
        //      то есть 1й столбик будет с 0 до 1000, 2й с 1000 до 1200(1000+200), 3й с 1200 до 1300 (1200+100)
        series: [
            [1000, 200, 100],
            [0, 1000, 1200]
        ]
    }, {
        stackBars: true,
        seriesBarDistance: 0,
        reverseData: true,
        fullWidth: true,
        high: 1300, //максимальное число дохода (100+1200)
        height: (3 * 33 + 50), // 5 - кол-во столбцов
        horizontalBars: true,
        axisX: {
            showLabel: false
        },
        axisY: {
          offset: 80,
        }
    },[
        ['screen and (min-width: 768px)', {
            axisY: {
              offset: 150,
            }
        }],
        ['screen and (min-width: 1240px)', {
            axisY: {
              offset: 250,
            }
        }]
    ]);

    new Chartist.Bar('#chart9', {
        labels: ['Автомобиль', 'Поощрения', 'Кредиты', 'Рента', 'Семья', 'Быт', 'Эмоции', 'Спортзал и здоровье', 'Поддержка и благотворительность'],
    
        // значения задаются с учётом того, что отсчет идёт от максимального значения, которое берётся с chart8:
        //      series: [
        //          [300, 200, 145, 30, 100, 25, 65, 100, 20], - тут указывается кол-во поинтов, которые будут закрашены, начиная с начальной точки
        //          [1000, 800, 655, 625, 525, 500, 435, 335, 315] - тут указывается начальная точка (отсчет с конца)
        //      ]
        //      то есть 1й столбик будет с 1000 до 1300, 2й с 800 до 1000(800+200), 3й с 655 до 800 (645+155) и тд.
        series: [
            [300, 200, 145, 30, 100, 25, 65, 100, 20],
            [1000, 800, 655, 625, 525, 500, 435, 335, 315]
        ],
    }, {
        stackBars: true,
        seriesBarDistance: 0,
        high: 1300, //максимальное число дохода (100+1200)
        reverseData: true,
        horizontalBars: true,
        fullWidth: true,
        height: (9 * 33 + 50), // 9 - кол-во столбцов
        axisY: {
          offset: 80,
        }
    },[
        ['screen and (min-width: 768px)', {
            axisY: {
              offset: 150,
            }
        }],
        ['screen and (min-width: 1240px)', {
            axisY: {
              offset: 250,
            }
        }]
    ]);
});