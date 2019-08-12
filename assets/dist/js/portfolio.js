$(document).ready(function(){
    //portfolio graph
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
    
});