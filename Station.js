$('document').ready(function() {
    var template = $("#stationTemplate").html();
    var result = Mustache.render(template, {
            "stno": "2075",
            "name": "Finner",
            "county": "Donegal",
            "lat": "54.49",
            "lng": "-8.239"
        });
    $("#container").html(result);
});