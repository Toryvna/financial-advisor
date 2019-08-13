$(document).ready(function(){
    
    new Chartist.Line('#chart1', {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
        series: [{
        name: 'series-1',
        data: [0, 21, 34, 44, 60, 80, 100]
        }, {
        name: 'series-2',
        data: [0, 15, 19, 30, 40, 50, 70, 80, 100]
        }, {
        name: 'series-3',
        data: [null, 0, 10, 21, 24, 46, 60, 63, 70, 100]
        }, {
        name: 'series-4',
        data: [null, 0, 5, 15, 22, 41, 55, 58, 60, 85]
        }],
    }, {
    fullWidth: true,
    height: 200,
    chartPadding: {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0
    },
    series: {
        'series-1': {
            showPoint: false
        },
        'series-2': {
            showPoint: false
        },
        'series-3': {
            showArea: true,
            showPoint: false
        },
        'series-4': {
            showArea: true,
            showPoint: false
        },
    },
    plugins: [
        Chartist.plugins.legend({
            legendNames: ['- потенциальный доход', '- остаток', '- затрати на цели', '- line4 '],
            position: 'bottom'
        }),
        Chartist.plugins.ctAxisTitle({
            axisX: {
                axisTitle: "год",
                axisClass: "ct-axis-title",
                offset: {
                    x: 0,
                    y: 50
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
    ] }, 
    [
        ['screen and (min-width: 768px)', {
            height: 450,
            chartPadding: {
                left: 30,
            },
            plugins: [
                Chartist.plugins.ctAxisTitle({
                    axisX: {
                        offset: {
                            y: 49
                        },
                    }
                })
            ]
        }]
    ]);
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

    new Chartist.Bar('#chart8', {
        labels: ['Защитная', 'Консервативная', 'Умерянная', 'Активная', 'Агрессивная'],
        series: [
            [10, 30, 40, 15, 10],
            [20, 30, 40, 5, 2],
        ]
    }, {
        seriesBarDistance: 10,
        height: 250,
        axisX: {
            offset: 90,
        },
        axisY: {
            offset: 35,
        },
        plugins: [
            Chartist.plugins.legend({
                legendNames: ['- целевые доли портфеля', '- актуальные доли портфеля'],
                position: 'bottom'
            }),
            Chartist.plugins.ctAxisTitle({
                axisX: {
                    axisTitle: "Корзина",
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 0,
                        y: 40
                    },
                    textAnchor: "middle"
                },
                axisY: {
                    axisTitle: "Целевая доля, %",
                    axisClass: "ct-axis-title",
                    offset: {
                        x: 10,
                        y: -3
                    },
                    flipTitle: false
                }
            })
        ] 
    },[
        ['screen and (min-width: 768px)', {
            seriesBarDistance: 35,
            axisX: {
                offset: 50,
            }
        }]
    ]);
    
});