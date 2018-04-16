$('document').ready(function() {

	$.getJSON('clubs.json',function(data)
	{
		console.log(data);

		var output = '<ul>';                     
		for (var i = 0; i < data.clubs.length; i++) {
			output += `<li>${data.clubs[i].name}</li>`;
		}
		output += '</ul>';

		$("#myDiv").html(output);   
	});
});
