console.log("ready!");
var posts_folder = '/posts';
var posts = ['test.html', 'test2.html'];
var posts_html = [];
for (var i = 0; i < posts.length; i++) {
    posts[i] = posts_folder + '/' + posts[i];
}
i = 0;

for (var i = 0; i < posts.length; i++) {
    $.get(posts[i], function (data) {
        posts_html.push(data);

    });

}

i = 0;

/*for (var i = 0; i < posts.length; i++) {
    var post_html = posts_html[i];
    var link = posts[i];
    console.log(i);
    name = $(post_html)[5].childNodes[1].innerHTML;
    document.getElementsByClassName('posts')[0].innerHTML = document.getElementsByClassName('posts')[0].innerHTML + '<a href="' + link + '" class="sidebar_link sidebar_posts_link"><li>' + name + '</li></a>'
    console.log(name + ' - ' + posts + ' - ' + i + ' - ' + posts[i] + ' - ' + link);

}*/