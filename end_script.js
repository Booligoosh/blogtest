document.getElementsByClassName('post')[0].innerHTML = document.getElementsByClassName('post_data')[0].innerHTML;
document.title = document.getElementById('data_title').innerHTML;

/*$(document).ready(function(){
    for (var i = 0; i < posts.length; i++) {
        var post_html = posts_html[i];
        var link = posts[i];
        console.log(i);
        name = $(post_html)[5].childNodes[1].innerHTML;
        document.getElementsByClassName('posts')[0].innerHTML = document.getElementsByClassName('posts')[0].innerHTML + '<a href="' + link + '" class="sidebar_link sidebar_posts_link"><li>' + name + '</li></a>'
        console.log(name + ' - ' + posts + ' - ' + i + ' - ' + posts[i] + ' - ' + link);

    }
});*/

$(document).ready(function(){  setTimeout(function(){
for (var i = 0; i < posts.length; i++) {
    var post_html = posts_html[i];
    var link = posts[i];
    console.log(i);
    name = $(post_html)[5].childNodes[1].innerHTML;
    document.getElementsByClassName('posts')[0].innerHTML = document.getElementsByClassName('posts')[0].innerHTML + '<a href="' + link + '" class="sidebar_link sidebar_posts_link"><li>' + name + '</li></a>'
    console.log(name + ' - ' + posts + ' - ' + i + ' - ' + posts[i] + ' - ' + link);

}
},500);});
