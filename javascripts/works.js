$(document).ready(function(){
    var d = new Date();
    var n = d.getFullYear();
    $('.js_year').text(n);

    $('#back').click(function(event){
    	event.preventDefault();
    	history.back();
    	console.log(111);
    });
});
