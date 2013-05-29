/*	Simple Javascript RSS Reader Version 1.0
	Copyright (c) 2006 - 2013 CS Truter
	Written by Christoff Truter
	email: Christoff@cstruter.com - (Please let me know if you intend to use the script) 
	Last Updated: 2013-05-29
*/

/* Load XML Object
   (Parameters) rssFeed:'RSS File' Body:'Layer for RSS Body' Title:'Layer for RSS Title' */

function ReadRSS(url, Body, Title) 
{
	var rssTitle = document.getElementById(Title);	
	var rssBody = document.getElementById(Body);

	try {	
		var rssFeed = RssToJson(url);		
		if (rssBody)
		{
			var buffer = "";
			for(var i = 0; i< rssFeed.items.length; i++) 
			{
				var output = rssBody.innerHTML;
				output = output.replace(/\(::Link::\)/g, rssFeed.items[i].link);
				output = output.replace(/\(::Title::\)/g, rssFeed.items[i].title);
				output = output.replace(/\(::Pubdate::\)/g, rssFeed.items[i].pubDate);
				output = output.replace(/\(::Description::\)/g, rssFeed.items[i].description);										   
				buffer+=output;
			}
			rssBody.innerHTML = buffer;
		}
		if (rssTitle)
		{
			var output = rssTitle.innerHTML;
			output = output.replace(/\(::Link::\)/g, rssFeed.link);
			output = output.replace(/\(::Title::\)/g, rssFeed.title);
			output = output.replace(/\(::Description::\)/g, rssFeed.description);
			rssTitle.innerHTML = output;
		}		
	}	
	catch(e)
	{
		rssTitle.innerHTML = 'Error occured';
		rssBody.innerHTML = 'Thrown Error:' + e.message;
	}
}