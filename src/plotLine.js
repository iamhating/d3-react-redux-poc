//var d3 = require("d3");

/*
function genData(numDataPoints) {
    let dpoints = [];
    for (i = 0; i < numDataPoints; i++) {
        dpoints.push({"x" : i, "y" : Math.random()});
    }
    return dpoints;
}
*/

function plotLine(data, containerId) {
    var WIDTH = 800;
    var HEIGHT = 600;
    var MARGINS = {top: 25, right: 25, bottom: 25, left: 25}

    var viz_container = d3.select('#' + containerId);

    viz_container.selectAll("svg")
        .remove();
    
    var viz = viz_container.append("svg")
        .attr("width", WIDTH)
        .attr("height", HEIGHT)
        .attr("viewBox", "0 0 1000 800")
        .attr("margin", Object.values(MARGINS).toString().replace(/,/g, " "))
        .attr("preserveAspectRatio", "xMidYMid");

    var xMin = data[0].x;
    var xMax = data[data.length - 1].x;
    var xScale = d3.scaleLinear().range([MARGINS.left, WIDTH - MARGINS.right])
                                  .domain([xMin - 0.25, xMax + 0.25]);
    var yScale = d3.scaleLinear().range([HEIGHT - MARGINS.top, MARGINS.bottom])
                                  .domain([0 - 0.1, 10 + 0.1]);

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale);;

    var line = d3.line()
                 .x(function(d) { return xScale(d.x); })
                 .y(function(d) { return yScale(d.y); })

    viz.append("g")
        .attr("id", "xaxis")
        .attr("transform", "translate(0, " + (HEIGHT - MARGINS['top']) + ")")
        .style("font-size", "20px")
        .call(xAxis);

    viz.append("g")
        .attr("id", "yaxis")
        .attr("transform", "translate(" + (MARGINS['left']) + ", 0)")
        .style("font-size", "20px")
        .call(yAxis);

    viz.append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("class", "line")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#ffab00")
        .style("stroke-width", "3");

    viz.append('g')
        .selectAll('circle')
        .data(data)
        .enter().append("circle")
        .attr("cx", function(d) { return xScale(d.x) })
        .attr("cy", function(d) { return yScale(d.y) })
        .attr("r", 5)
        .style("fill", "#ffab00")
        .style("stroke", "#fff");

    console.log("made it through");
}

export default plotLine;