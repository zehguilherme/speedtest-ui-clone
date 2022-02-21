const options = {
    chart: {
        type: 'line',
        width: '100%',
        height: 42,
        sparkline: {
            enabled: true
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        grid: {
            show: false
        },
        animations: {
            enabled: true,
            easing: 'linear',
            speed: 2000,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        }
    },
    series: [
        {
            name: 'Download',
            data: [30, 40, 50, 150, 200, 250, 250, 250, 250, 150, 200, 250, 250, 250, 250]
        },
        {
            name: 'Upload',
            data: [20, 45, 65, 75, 85, 95, 100, 110, 120, 75, 85, 95, 100, 110, 120]
        }
    ],
    stroke: {
        curve: 'smooth',
        width: 1.5
    },
    offsetX: 0,
    offsetY: 0,
    grid: {
        show: false
    },
    tooltip: {
        enabled: false
    },
    legend: {
        show: false
    },
    colors: ['#6afff3', '#bf71ff'],
};

const chart = new ApexCharts(document.querySelector("#download-upload-line-graphic"), options);

chart.render();

document.querySelector("#download-upload-line-graphic").classList.add('disabled')
