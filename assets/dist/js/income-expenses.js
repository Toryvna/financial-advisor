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
});