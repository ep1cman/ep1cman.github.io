---
---

function generateRandomPosts()
{
    $.getJSON("{{ site.url }}/posts.json", function(data) {
        console.log("[posts.json loaded for random posts]");

        var postsCount = data.length;
        var posts = data;

        var randomIndexUsed = [];
        var counter = 0;
        var numberOfPosts = 5;

        var divRandomPosts = $("#featuredPosts");

        while (counter < numberOfPosts && counter < postsCount)
        {
            var randomIndex = Math.floor(Math.random() * postsCount);

            if (randomIndexUsed.indexOf(randomIndex) == "-1")
            {
                var postHREF = posts[randomIndex].href;
                var postThumb = posts[randomIndex].thumb;

                if (counter == 0)
                {
                    divRandomPosts.append('<div class="item active centered"><a href="{{ site.url }}/' + postHREF +'"><img src="{{ site.url }}' + postThumb +'"></a></div>');
                }
                else
                {
                    divRandomPosts.append('<div class="item centered"><a href="{{ site.url }}/' + postHREF +'"><img src="{{ site.url }}' + postThumb +'"></a></div>');
                }

                randomIndexUsed.push(randomIndex);
                counter++;
            }
        }
    });
}

$(document).ready(function() {
    generateRandomPosts();
});
