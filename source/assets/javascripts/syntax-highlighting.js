$(document).ready(function() {
  $('pre code').each(function(i, block) {
    var $block = $(block);
    var classes = $block.attr("class")
    // help hljs discover which language to use
    classes = classes.replace("language-", "");
    $block.attr("class", classes)
    hljs.highlightBlock(block);
  });
});

