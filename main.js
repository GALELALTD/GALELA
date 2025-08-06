collection = [];
collector = function(e) {
	collection[e.name] = e.value;
	

	xupdates(e.name,e.value);
}
window.totalform = "";
	xupdates =  function(k,v) {
		totalform = totalform + `<input type="text" name="`+ k +`" value="` + v + `">`;
	}

done = function() {
window.location = 'done.html';	
}

getq = function() {
let paramsString = "name=foo&age=1337"
let searchParams = new URLSearchParams(paramsString);

searchParams.has("name") === true; // true
searchParams.get("age") === "1337"; // true
}