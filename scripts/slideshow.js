
var imageCount = {};

function goNext(imgName)
{
    if (imageCount[imgName] == undefined)
    {
        imageCount[imgName] = 1;
    } else {
        imageCount[imgName] += 1;
    }

    if(imageCount[imgName] >= images[imgName].length)
    {
        imageCount[imgName] = 0;
    }
    document.getElementById(imgName).src = images[imgName][imageCount[imgName]];
    document.getElementById(imgName + "-of").innerHTML = (imageCount[imgName]+1).toString() + " of "  + (images[imgName].length).toString();
    event.preventDefault();
}

function goPrev(imgName)
{
    if (imageCount[imgName] == undefined)
    {
        imageCount[imgName] = images[imgName].length-1;
    } else {
        imageCount[imgName] -= 1;
    }

    if(imageCount[imgName] < 0)
    {
        imageCount[imgName] = images[imgName].length-1;
    }
    document.getElementById(imgName).src = images[imgName][imageCount[imgName]];
    document.getElementById(imgName + "-of").innerHTML = (imageCount[imgName]+1).toString() + " of "  + (images[imgName].length).toString();
    event.preventDefault();
}

$( document ).ready(function() {
    $(".oftext").each(function() {
        var group = $(this).attr('id').split("-")[0];
        if (images[group].length > 1){
            $(this).text("1 of " + images[group].length);
        } else {
            $(this).remove();
            $("#" + group + "-text").remove();
        }
        $("#" + group).attr("src", images[group][0]);
    });
});
