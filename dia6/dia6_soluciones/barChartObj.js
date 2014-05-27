var outliers = outliers || {'version':0.1, 'controller':{}, 'viz': {} ,'extras': {} };


outliers.viz.barChart = function(options)
{

    // Object

    var self = {};

    // Get options data

    for (key in options){
        self[key] = options[key];
    }

    self.parentSelect = "#"+self.idName;


    self.init = function () {

            self.svg = d3.select(self.parentSelect).append("svg")
                    .attr("width",self.width)
                    .attr("height",self.height);

            self.yScale = d3.scale.linear().domain([0,500000]).range([self.margin,self.height-self.margin]).clamp(true);

    };

    self.render = function(data){
        console.log("RENDER");
        console.log(data);
        self.valueLabels = Object.keys(data[0]);

        self.values = [];

        self.valueLabels.forEach(function(d,i){
            if(d!="provincia"){
                console.log(data[0][d]);
                if(data[0][d]=='-'){
                    self.values.push(0);
                }
                else{
                    self.values.push(data[0][d]);
                }
            }
        });
        console.log(self.values);

        self.barras = self.svg.selectAll(".bar").data(self.values);

        self.barras.exit().remove();

        self.barras.transition().duration(self.transTime)
            .attr("y",function(d){return self.height - self.yScale(parseFloat(d));})
            .attr("height",function(d){return self.yScale(parseFloat(d));});

        self.barras.enter()
            .append("rect")
            .attr("class","bar")
            .style("fill","#CA3")
            .attr("x",function(d,i){return (self.width/(data.length+5))*(i);})
            .attr("y",function(d){return self.height - self.yScale(parseFloat(d));})
            .attr("width",5)
            .attr("height",function(d){return self.yScale(parseFloat(d));});
    };

    self.init();

    return self;


}

