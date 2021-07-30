/*NAVBAR*/

var mini = true;
document.getElementById('expander').addEventListener('click', toggleSidebar);
document.getElementsByClassName('navbar-nav')[0].addEventListener('click', changeTab);

function toggleSidebar() {
    if (mini) {
        console.log("opening sidebar");
        document.getElementsByTagName("body")[0].className = 'navbar-expanded';
        mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementsByTagName("body")[0].className = 'navbar-shrinked';
        mini = true;
    }
}

function changeTab() {
    let target = arguments[0].target;
    let tagName = target.tagName;
    let liElement;
    if (tagName === "I" || tagName === "SPAN") {
        liElement = target.parentElement.parentElement;
    } else if (tagName === "A") {
        liElement = target.parentElement;
    } else {
        return;
    }
    [...liElement.parentElement.children].forEach(x => x.className = "");
    liElement.classList.add('active');
}

/*TABBAR*/
document.getElementsByClassName('tab')[0].addEventListener('click', changeTab);
var activeTab = 'tabCharts';

function changeTab() {
    let target = arguments[0].target;
    let tagName = target.tagName;
    let liElement;
    if (tagName === "I" || tagName === "SPAN") {
        liElement = target.parentElement;
    } else if (tagName === "A") {
        liElement = target;
    } else {
        return;
    }

    [...liElement.parentElement.children].forEach(x => x.className = "");
    liElement.classList.add('active');

    let charts = document.querySelector('section[role="region"]');
    let aside = document.querySelector('aside');
    activeTab = liElement.id;
    if (activeTab === 'tabCreditCard') {
        charts.style.display = 'none';
        aside.style.display = 'initial';
    } else {
        aside.style.display = 'none';
        charts.style.display = 'initial';
    }
}

/*INFOBOX*/
document.getElementsByClassName('info-box-container')[0].addEventListener('click', changeActive);

function changeActive() {
    let target = arguments[0].target;
    let className = target.className;
    let tagName = target.tagName;
    let infobox;
    if (tagName === "svg") {
        infobox = target.parentElement;
    } else if (tagName === "path") {
        infobox = target.parentElement.parentElement;
    } else if (className === "info-box-container") {
        return;
    } else if (className.includes("info-box")) {
        infobox = target;
    } else if (className === "value" || className === "header") {
        infobox = target.parentElement.parentElement;
    } else if (className === "info-content") {
        infobox = target.parentElement;
    } else {
        return;
    }
    [...infobox.parentElement.children].forEach(x => x.className = "info-box");
    infobox.classList.add('info-box');
    infobox.classList.add('active');
}

/* STATISTICS */
var data = {
    labels: ["Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
            label: 'A',
            backgroundColor: "rgb(51, 38, 174)",
            data: [500, 300, 800, 150, 200, 150, 800, 200, 800, 100],
        },
        {
            label: 'B',
            backgroundColor: "rgb(51, 38, 174)",
            data: [300, 400, 150, 200, 100, 500, 400, 350, 700, 200],
        },
        {
            label: 'C',
            backgroundColor: "rgb(51, 38, 174)",
            data: [450, 700, 300, 650, 150, 300, 600, 450, 835, 75],
        },
    ]
};

var options = {
    cornerRadius: 0,
    maintainAspectRatio: false,
    legend: {
        display: false,
        position: 'bottom',
        labels: {
            fontColor: "rgba(0,0,0, 0.5)",
        }
    },
    scales: {
        yAxes: [{
            gridLines: {
                display: false,
            },
            ticks: {
                maxTicksLimit: 5,
            }
        }],
        xAxes: [{
            barPercentage: 0.25,
            gridLines: {
                display: false,
            },
        }]
    }
};


var ctx = document.getElementById('statisticsChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

/*SPENT TIME*/
var gradientFill = ctx.createLinearGradient(0, 0, 0, 125);
gradientFill.addColorStop(0, "rgba(244,246,255, 1)");
gradientFill.addColorStop(1, "rgba(255,255,255, 1)");


var data = {
    labels: ["", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ""],
    datasets: [{
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(255,57,43, 1)",
            borderWidth: 2,
            data: [5, 3, 8, 6, 10, 8, 13],
        },
        {
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#f0f2fa",
            borderWidth: 1,
            fill: true,
            backgroundColor: gradientFill,
            data: [3, 5, 4, 10, 8, 9, 3, 15, 14, 17],
        }
    ]
};

var options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    tooltips: {
        mode: 'index',
        intersect: true,
        yPadding: 10,
        xPadding: 10,
        caretSize: 8,
        backgroundColor: 'rgba(255,57,43, 1)',
        titleFontColor: "#fff",
        bodyFontStyle: 'bold',
        bodyFontColor: "#fff",
        displayColors: false,
        callbacks: {
            label: function(tooltipItems, data) {
                return "4h 26 min";
            }
        }
    },
    showAllTooltips: true,

    // annotation: {
    //     events: ["click"],
    //     annotations: [{
    //             drawTime: "afterDatasetsDraw",
    //             id: "hline",
    //             type: "line",
    //             mode: "horizontal",
    //             scaleID: "y-axis-0",
    //             value: 13,
    //             borderColor: "#000",
    //             borderWidth: 1,
    //             label: {
    //                 backgroundColor: "red",
    //                 content: "Test Label",
    //                 enabled: true,
    //                 position: "center",
    //                 xAdjust: 100,
    //             },
    //             onClick: function(e) {
    //                 // The annotation is is bound to the `this` variable
    //                 console.log("Annotation", e.type, this);
    //             }
    //         }
    //         //     {
    //         //     drawTime: "beforeDatasetsDraw",
    //         //     type: "box",
    //         //     xScaleID: "x-axis-0",
    //         //     yScaleID: "y-axis-0",
    //         //     xMin: "Thu",
    //         //     xMax: "Sat",
    //         //     yMin: 13,
    //         //     yMax: 15,
    //         //     backgroundColor: "rgba(101, 33, 171, 0.5)",
    //         //     borderColor: "rgb(101, 33, 171)",
    //         //     borderWidth: 1,
    //         //     onClick: function(e) {
    //         //         console.log("Box", e.type, this);
    //         //     }
    //         // }
    //     ]
    // },
    scales: {
        yAxes: [{
            display: false,
            ticks: {
                maxTicksLimit: 5,
                min: 0,
            },
            gridLines: {
                display: false
            }
        }],
        xAxes: [{
            display: true,
            ticks: {
                fontSize: 12,
                fontColor: '#c3c6de'
            },
            gridLines: {
                display: false
            }
        }]
    },
    elements: {
        point: {
            radius: 0
        }
    }
};


Chart.pluginService.register({
    beforeRender: function(chart) {
        if (chart.config.options.showAllTooltips) {
            // create an array of tooltips
            // we can't use the chart tooltip because there is only one tooltip per chart
            chart.pluginTooltips = [];
            chart.config.data.datasets.forEach(function(dataset, i) {
                chart.getDatasetMeta(i).data.forEach(function(sector, j) {
                    chart.pluginTooltips.push(new Chart.Tooltip({
                        _chart: chart.chart,
                        _chartInstance: chart,
                        _data: chart.data,
                        _options: chart.options.tooltips,
                        _active: [sector]
                    }, chart));
                });
            });

            // turn off normal tooltips
            chart.options.tooltips.enabled = false;
        }
    },
    afterDraw: function(chart, easing) {
        if (chart.config.options.showAllTooltips) {
            // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
            if (!chart.allTooltipsOnce) {
                if (easing !== 1)
                    return;
                chart.allTooltipsOnce = true;
            }

            // turn on tooltips
            chart.options.tooltips.enabled = true;
            Chart.helpers.each(chart.pluginTooltips, function(tooltip, i) {
                if (i !== 6) return;
                tooltip.initialize();
                tooltip.update();
                // we don't actually need this since we are not animating tooltips
                tooltip.pivot();
                tooltip.transition(easing).draw();
            });
            chart.options.tooltips.enabled = false;
        }
    }
});

var ctx = document.getElementById('spentTimeChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

/*ASIDE CHART*/
var data = {
    labels: ["Spend", "Earned"],
    datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3326ae", "#dad7e9"],
        data: [62, 38]
    }]
};

var options = {
    maintainAspectRatio: false,
    cutoutPercentage: 90,
    backgroundColor: '#fff',
    elements: {
        center: {
            text: '38%',
            color: '#3326ae', // Default is #000000
            fontStyle: 'Arial', // Default is Arial
            fontSize: 12,
            sidePadding: 60, // Default is 20 (as a percentage)
            minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25 // Default is 25 (in px), used for when text wraps
        }
    },
    legend: {
        display: false,
        position: 'bottom',
        labels: {
            fontColor: "rgba(0,0,0, 0.5)",
            boxWidth: 20,
            padding: 10
        }
    },
};

Chart.pluginService.register({
    beforeDraw: function(chart) {
        if (chart.config.options.elements.center) {
            // Get ctx from string
            var ctx = chart.chart.ctx;

            // Get options from the center object in options
            var centerConfig = chart.config.options.elements.center;
            var fontStyle = centerConfig.fontStyle || 'Arial';
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var maxFontSize = centerConfig.maxFontSize || 75;
            var sidePadding = centerConfig.sidePadding || 20;
            var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
                // Start with a base font of 30px
            ctx.font = "30px " + fontStyle;

            // Get the width of the string and also the width of the element minus 10 to give it 5px side padding
            var stringWidth = ctx.measureText(txt).width;
            var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

            // Find out how much the font can grow in width.
            var widthRatio = elementWidth / stringWidth;
            var newFontSize = Math.floor(30 * widthRatio);
            var elementHeight = (chart.innerRadius * 2);

            // Pick a new font size so it will not be larger than the height of label.
            var fontSizeToUse = Math.min(newFontSize, elementHeight, maxFontSize);
            var minFontSize = centerConfig.minFontSize;
            var lineHeight = centerConfig.lineHeight || 25;
            var wrapText = false;

            if (minFontSize === undefined) {
                minFontSize = 20;
            }

            if (minFontSize && fontSizeToUse < minFontSize) {
                fontSizeToUse = minFontSize;
                wrapText = true;
            }

            // Set font settings to draw it correctly.
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            ctx.font = fontSizeToUse + "px " + fontStyle;
            ctx.fillStyle = color;

            if (!wrapText) {
                ctx.fillText(txt, centerX, centerY);
                return;
            }

            var lines = [];
            var chunks = txt.split('\n');
            for (var m = 0; m < chunks.length; m++) {
                var words = chunks[m].split(' ');
                var line;

                // Break words up into multiple lines if necessary
                for (var n = 0; n < words.length; n++) {
                    var testLine = (n == 0) ? words[n] : line + ' ' + words[n];
                    var metrics = ctx.measureText(testLine);
                    var testWidth = metrics.width;
                    if (testWidth > elementWidth && n > 0) {
                        lines.push(line);
                        line = words[n];
                    } else {
                        line = testLine;
                    }
                }
                lines.push(line);
            }

            // Move the center up depending on line height and number of lines
            centerY -= ((lines.length - 1) / 2) * lineHeight;

            // All but last line
            for (var n = 0; n < lines.length; n++) {
                ctx.fillText(lines[n], centerX, centerY);
                centerY += lineHeight;
            }
        }
    }
});

var ctx = document.getElementById('asideChart').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});