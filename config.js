var SECONDS = 1000
var MINUTES = 60 * SECONDS
var HOURS = 60 * MINUTES

var config = {
	"pages" : [
		{
			"id" : "jenkins",
 		   	"url" : "http://10.192.42.156/jenkins/plugin/jenkinswalldisplay/walldisplay.html?viewName=upstream&jenkinsUrl=http://10.192.42.156/jenkins"
		},
		{
			"id" : "sonar",
 		   	"url" : "http://10.192.42.156/sonar",
			"scale" : 1.5,
			"refresh" : 5 * MINUTES
		},
		{
			"id" : "burndown",
			"url" : "https://skydrive.live.com/embed?cid=0F52BEF860A4A4E4&resid=F52BEF860A4A4E4%211348&authkey=AGUwyvbUsSiMWeA&em=2&wdAllowInteractivity=False&Item=Burndown",
			"refresh" : 2 * HOURS
		},
		{
			"id" : "cfd",
			"url" : "https://skydrive.live.com/embed?cid=0F52BEF860A4A4E4&resid=F52BEF860A4A4E4%211348&authkey=AGUwyvbUsSiMWeA&em=2&wdAllowInteractivity=False&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=True",
			"refresh" : 2 * HOURS
		}
	]
}
