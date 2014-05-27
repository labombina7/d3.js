var outliers = outliers || {'version':0.1, 'controller':{}, 'viz': {} ,'extras': {} };


outliers.viz.wordCloud = function(options)
{

    // Object

    var self = {};

    // Get options data

    for (var key in options){
        self[key] = options[key];
    }

    self.parentSelect = "#"+self.idName;


    self.drawWords = function (words) {

            var text = self.svg
                .selectAll("text")
                .data(words,function(d) { return d.text;});

            text.transition()
                .duration(1000)
                .attr("transform", function(d) { return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"; })
                .style("font-size", function(d) { return d.size + "px"; });

            text.enter().append("text")
                .attr("text-anchor", "middle")
                .attr("class","cloudText")
                .attr("transform", function(d) {
                    return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(function(d) { return d.text; })
                .style("font-size", function(d) { return d.size + "px"; })
                .style("opacity",1e-6)
                .transition()
                .duration(1000)
                .style("opacity", 0.9);

            text.exit().transition().duration(1000).style("opacity",1e-6).remove();

    };

    self.init = function () {

            self.svg = d3.select(self.parentSelect).append("svg")
                    .attr("width",self.width)
                    .attr("height",self.height)
                    .append("g")
                    .attr("transform", "translate("+(self.width/2)+","+(self.height/2)+")");

            self.layout = d3.layout.cloud().size([self.width, self.height])
            .padding(10)
            .font("Impact")
            .rotate(function() { return 0; })
            .fontSize(function(d) { return d.size; })
            .on("end", self.drawWords);
    };

    self.render = function(data){

        var maxSize = data[0].size;

        var cloudData = [];

        for(i=0;i<data.length;i++)
        {
            var unDato = {};

            unDato.text = data[i].text;
            unDato.size = self.fontScale (data[i].size/maxSize);

            cloudData.push(unDato);

        }

        self.layout.words(cloudData).start();

    };

    self.init();

    return self;


};

