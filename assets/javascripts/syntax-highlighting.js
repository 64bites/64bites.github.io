$(document).ready(function(){$("pre code").each(function(a,c){var e=$(c),t=e.attr("class");t=t.replace("language-",""),e.attr("class",t),hljs.highlightBlock(c)})});