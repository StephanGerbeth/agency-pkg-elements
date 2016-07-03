"use strict";

var js = require('agency-pkg-services/parser/js')(require('./packages'));
require('agency-pkg-services/touchIndicator');

(function(){
    $(function() {
        js.parse();
    });
})();
