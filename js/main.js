document.getElementById('testingAMP').href= "#developer=1";

var url = 'http://www.check.com/123';
var id = url.substring(url.lastIndexOf('/') + 1);
document.getElementById("sai").innerHTML = id + "  took from custom url";