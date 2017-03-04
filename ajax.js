var XMLHttp = new XMLHttpRequest()
XMLHttp.onreadystatechange = function () {
	if (XMLHttp.readyState == 4 && XMLHttp.status == 200) {
		var result = JSON.parse(XMLHttp.responseText)
		console.log(result)
		/*
		for(var i = 0;i<result.length;i++){
			console.log('Title:'+(i+1)+' '+result[i].title)
		}*/
	}
}
XMLHttp.open('GET', '/api/topics/hot.json', true)
XMLHttp.send();