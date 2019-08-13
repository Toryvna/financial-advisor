$(document).ready(function(){

    // user-account graph
    new Chartist.Line('#chart2', {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028'],
        series: [{
          name: 'series-1',
          data: [null, 0, 10, 21, 24, 46, 60, 63, 70, 100]
        }, {
          name: 'series-2',
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
                axisTitle: "год",
                axisClass: "ct-axis-title",
                offset: {
                    x: 0,
                    y: 50
                },
                textAnchor: "middle"
            },
            axisY: {
                axisTitle: "Затраты, млн. руб.",
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
            height: 270,
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