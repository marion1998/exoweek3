//Si le type de parametre un est egal au type du deuxieme parametre alors afficher le message qui dit "le type est la meme"
//Sinon afficher le messagege qui dit "le type n'est pas le meme"

function numberfunc(num1, num2) {
	if (typeof num1 === typeof num2) {
		console.log('Le type est le même');
	} else {
		typeof num1 !== typeof num2;
		console.log('Le type est different');
	}
}
numberfunc('bonjour', 2);