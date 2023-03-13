function ROT13(str) {
	var str = "";
	for (var i = 0; i < asciiArr.length; i++) {
		var ch=asciiArr.charCodeAt(i);
	  if(ch>=65 && ch<=90){
	    str += String.fromCharCode((ch-65+13)%26+65);
	  }
	}
	return str;
}