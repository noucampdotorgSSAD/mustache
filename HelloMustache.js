$('document').ready(function() {
    
    // 1
    var template = $("#template").html();
    // 2
    var result = Mustache.render(template, {"name": "Bob"});
    // 3
    $("#container").html(result);
});
