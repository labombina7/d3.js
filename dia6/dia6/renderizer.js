var atos;

atos.renderizer = function(layoutType, options){

    var self = {};

    this.layoutType = layoutType;

    for(var key in options){
        self[key] = options[key];
    }

    self.init = function(){

        //Instanciamos un objeto barras
        if(layoutType == "bars"){

        }

        //Instanciamos un objeto barras
        if(layoutType == "wordCloud"){
            var wordCloud = outliers.viz.wordCloud({
                'idName':"wordParent",
                'width': 400,
                'height':400,
                'fontScale': fontScale
            });
        }
    };

};