var tools={isEmail:function(a){return a.search(/^\s*[\w\~\-\.]+\@[\w\~\-]+(\.[\w\~\-]+)+\s*$/g)>=0}};function AutoScroll(a){$(a).find("ul:first").animate({marginTop:"-30px"},500,function(){$(this).css({marginTop:"0px"}).find("li:first").appendTo(this)})}$(document).ready(function(){var a=$("#scrollDiv > ul > li");if(a.length>1){timerID=setInterval('AutoScroll("#scrollDiv")',3500);a.each(function(){$(this).hover(function(){clearInterval(timerID)},function(){timerID=setInterval('AutoScroll("#scrollDiv")',3500)})})}});
