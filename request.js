var nav,main;

window.onload=function(){

	this.nav=document.getElementById("nav");
	this.main=document.getElementById("main");
	$.getJSON( "https://api.github.com/gists", parseJSON(data));

}

parseJSON=function(data){

  	var items = [];
  	console.log("HOLA");
  	$.each(data, function( key, val ) {
    	items.push( "<li id='" + key + "'>" + val + "</li>" );
    }
}
