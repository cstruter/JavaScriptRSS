function RssController($scope) {
	$scope.RssFeed = RssToJson('cnn_tech_rss.xml');
}	