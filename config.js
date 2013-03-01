var SECONDS = 1000
var MINUTES = 60 * SECONDS

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
		}
	]
}
