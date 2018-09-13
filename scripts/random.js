function generateRandomPosts()
{
    $.getJSON("http://goscik.com/posts.json", function(data) {
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
                    divRandomPosts.append('<div class="item active centered"><a href="http://goscik.com/' + postHREF +'"><img src="http://goscik.com' + postThumb +'"></a></div>');
                }
                else
                {
                    divRandomPosts.append('<div class="item centered"><a href="http://goscik.com/' + postHREF +'"><img src="http://goscik.com' + postThumb +'"></a></div>');
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
