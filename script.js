function ROT13(str) {
  var res = "";
	for (var i = 0; i < str.length; i++) {
    var ch=str.charCodeAt(i);
    if(ch>=65 && ch<=90){
	    res += String.fromCharCode((ch-65+13)%26+65);
	  }
    else res+=str.charAt(i);
	}
  return res;
}