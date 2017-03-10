$( function() {

	var table_code_postaux = [];
	
	var xhr = new XMLHttpRequest(); 
	xhr.open('GET', 'https://datanova.legroupe.laposte.fr/api/records/1.0/search/?dataset=laposte_hexasmal&rows=20&facet=nom_de_la_commune&facet=code_postal');
	xhr.onreadystatechange = function() {
	  	if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
	  		for( var i=0 ; i<20 ; i++ ){
	   			table_code_postaux.push(JSON.parse(xhr.responseText).records[i].fields.code_postal);
	  		}
	  	}
	};
	xhr.send(null);

    $( "#code_postal" ).autocomplete({
      source: table_code_postaux
    });
});


