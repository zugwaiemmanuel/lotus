document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: ''
        },

        credits: {
            enabled: false,
        },

        xAxis: {
            categories: ['Name', 'Age', 'Blood Group']
        },
        title: {
            text: 'Records'
        },
        yAxis: {
            title: {
                text: 'Size'
            }
        },

        series: [
            {
                first: 1-15,
                data: ['Esther Dest', 9, 'A'],
                data: ['Tanya Von', 9, 'AB'],
                data: ['Thomas Wayne', 20, 'B'],
                data: ['Harry Stiles', 19, 'O']

            },

            {
                second: 16-30,
                data: ['Nafi Wills', 23, 'O'],
                data: ['Zakari Barnes', 24, 'A'],
                data: ['Diogo Jota', 27, 'O'],
                data: ['Daniella Raymond', 26, 'AB'],
                data: ['James Emmanuel', 23, 'A'],
                data: ['Abigail John', 18, 'O'],
                data: ['Brenda Thorne', 29, 'A']
            },

            {
                third: 31-45,
                data: ['Clark Kent', 32, 'O'],
                data: ['Mark Jay', 31, 'AB'],
                data: ['Martha Hills', 37, 'A'],
                data: ['Tom Banks', 35, 'AB']
            },

            {
                fourth: 46-70,
                data: ['Pat Briggs', 70, 'A'],
                data: ['Henry Danger', 62, 'B'],
                data: ['John Barnes', 62, 'B'],
                data: ['Ben Matthews', 52, 'B'],
                data: ['Timmy Roy', 65, 'B']



            }



        ]

    });
});