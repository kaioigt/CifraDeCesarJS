	var letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	


	var escolha = prompt("1 para cifrar ou 2 para decifrar:");

	switch (escolha){
		case '1':

		var frase = prompt("Digite a frase:");
		var codigo = prompt("Informe o codigo:");
		var valorCodigo = parseInt(codigo);
		var fraseFinal = [];
		
		for (var i = 0; i < frase.length; i++){
	 		if(frase[i] != ' '){

	   			for (var j = 0; j < letras.length; j++){
	     			if (frase[i] == letras[j]){
	       			fraseFinal[i] = letras[(j + valorCodigo) % letras.length];
	       		break;
	     }
	   }
	 }
	 else
	 {
	   fraseFinal[i] = ' ';
	 }
	}
		break;
	
	
		case '2':

		var frase = prompt("Digite a frase:");
		var codigo = prompt("Informe o codigo:");
		var valorCodigo = parseInt(codigo);
		var fraseFinal = [];

		for (var i = 0; i < frase.length; i++){
	 		if(frase[i] != ' '){

	   			for (var j = 0; j < letras.length; j++){
	     			if (frase[i] == letras[j]){
	       			fraseFinal[i] = letras[(j - valorCodigo) % letras.length];
	       		break;
	     }
	   }
	 }
	 else
	 {
	   fraseFinal[i] = ' ';
	 }
	}

	break;

	

}




