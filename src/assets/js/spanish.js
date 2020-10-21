const { table } = require("console");

$(document).ready(function() {
    $('#propuesta').dataTable( {
        "language": {
            "url": "assets/json/spanish.json"
        }
    } );
} );