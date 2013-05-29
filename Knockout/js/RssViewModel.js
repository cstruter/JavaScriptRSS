function RssViewModel() {
	this.RssFeed = RssToJson('cnn_tech_rss.xml');
}

var PageViewModel = new RssViewModel();
ko.applyBindings(PageViewModel);