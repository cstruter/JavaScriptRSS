/*	Simple Javascript RSS Reader Version 1.0
	Copyright (c) 2006 - 2013 CS Truter
	Written by Christoff Truter
	email: Christoff@cstruter.com - (Please let me know if you intend to use the script) 
	Last Updated: 2013-05-29
*/

/* Convert Rss feed to Json Object */
function RssToJson(url) {

	function getNode(TagName, node)
	{
		var currentNode = (node == null) ? xmlDoc.getElementsByTagName(TagName) : 
						items[node].getElementsByTagName(TagName);
		if(currentNode.length > 0)
			return currentNode[0].firstChild.nodeValue;
	}
	
	var xmlDoc = (document.all) ? new ActiveXObject("Microsoft.XMLDOM") 
								: document.implementation.createDocument("","",null);
	xmlDoc.async = false;
	xmlDoc.load(url);
	var items = xmlDoc.getElementsByTagName('item');
	var feed = {
		title: getNode('title'),
		description : getNode('description'),
		link: getNode('link'),
		items:[]
	};		
	for(var i = 0; i < items.length; i++) 
	{
		var item = {
			title : getNode('title', i),
			description : getNode('description', i),
			pubDate : getNode('pubDate', i),
			link : getNode('link', i)			
		};
		feed.items.push(item);
	}
	return feed;	
}