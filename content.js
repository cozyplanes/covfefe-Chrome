var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/coffee/gi, 'covfefe');
			/* Need to find a way for multiple text replace
			var replacedText = text.replace(/Coffee/gi, 'Covfefe');
			var replacedText = text.replace(/coverage/gi, 'covfefe');
			var replacedText = text.replace(/Coverage/gi, 'Covfefe');
			var replacedText = text.replace(/trump/gi, 'covfefe'); // Easter Egg
			var replacedText = text.replace(/Trump/gi, 'Covfefe'); // Easter Egg
			var replacedText = text.replace(/Developer/gi, 'Ian'); // Easter Egg
			var replacedText = text.replace(/developer/gi, 'ian'); // Easter Egg
			*/

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}