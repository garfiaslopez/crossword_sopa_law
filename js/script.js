(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "5.- Información digital obtenida en multiples plataformas.",
					answer: "contenido",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 4
				},
			 	{
					clue: "7.- Palabra utilizada para enmascarar el ataque a la libertad de expresión.",
					answer: "regulacion",
					position: 6,
					orientation: "across",
					startx: 6,
					starty: 6
				},
				{
					clue: "8.- Ley que protege derechos intelectuales y elimina el anonimato de usuarios de internet.",
					answer: "acta",
					position: 8,
					orientation: "across",
					startx: 5,
					starty: 8
				},
				{
					clue: "11.- Derecho que tienen las personas a decir, manifestar y difundir de manera libre.",
					answer: "expresion",
					position: 11,
					orientation: "across",
					startx: 2,
					starty: 12
				},
				{
					clue: "12.- Proyecto de la ley creado con el objetivo para supuestamente combatir el trafico de contenidos en: ",
					answer: "sopa",
					position: 12,
					orientation: "across",	
					startx: 4,
					starty: 14
				},
				{
					clue: "1.- Acción de obtener información privada de usuarios de internet sin su consentimiento.",
					answer: "espionaje",
					position: 0,
					orientation: "down",
					startx: 15,
					starty: 1
				},
				{
					clue: "2.- Conjunto de información que se encuentra en una dirección determinada de internet.",
					answer: "web",
					position: 1,
					orientation: "down",
					startx: 5,
					starty: 3
				},
				{
					clue: "3.- Concepto de la expresión libre de internet.",
					answer: "libertad",
					position: 2,
					orientation: "down",
					startx: 7,
					starty: 3
				},
				{
					clue: "4.- Practica que consiste en reproducir apropiación y distribución a gran escala de contenido digital.",
					answer: "pirateria",
					position: 3,
					orientation: "down",
					startx: 11,
					starty: 3
				},
				{
					clue: "6.- Concepto que se refiere al control de la información que un usuario posee cuando se conecta a la red.",
					answer: "privacidad",
					position: 5,
					orientation: "down",
					startx: 13,
					starty: 4
				},
				{
					clue: "8.- Convenio entre dos o mas partes como asociaciones o entidades, como resultado de un proceso de negociación.",
					answer: "acuerdo",
					position: 7,
					orientation: "down",
					startx: 5,
					starty: 8
				},
				{
					clue: "9.- Red informática de nivel mundial que utiliza la línea telefonica para transmitir información.",
					answer: "internet",
					position: 9,
					orientation: "down",
					startx: 2,
					starty: 9
				},
				{
					clue: "10.- Forma de evitar consumir contenido ilegal protegido por propiedad intelectual.",
					answer: "bloqueo",
					position: 9,
					orientation: "down",
					startx: 9,
					starty: 10
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
