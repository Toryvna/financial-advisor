$(document).ready(function(){
    new Chartist.Bar('#chart3', {
        series: [
            [11, 5, 4, 4, 3],
            [-3, 0, 0, 0, 0]
        ]
    }, {
        reverseData: true,
        horizontalBars: true,
        height: 300,
        chartPadding: {
            top: 0,
            right: 0,
            bottom: 20,
            left: 0
        },
        axisY: {
            offset: 0
        },
    },
    [
        ['screen and (min-width: 768px)', {
            high: 16,
            low: -16,
        }]
    ]);

    new Chartist.Bar('#chart4', {
        series: [
            [11],
            [0]
        ]
    }, {
        reverseData: true,
        horizontalBars: true,
        height: 50,
        axisX: {
            showGrid: false,
            offset: 0,
            showLabel: false,
        },
        axisY: {
            showGrid: false,
            offset: 0,
            showLabel: false,
        },
    });

});