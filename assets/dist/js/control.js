$(document).ready(function(){

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