var print =function(msg) {

document.getElementById("output").innerHTML="length is "+msg;
}

document.getElementById("button").onclick=function(event) {

	print(document.getElementById("string").value.length);

}