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

    self.init = function () {

    };

    self.render = function(data){

    };


    self.init();

    return self;


};

