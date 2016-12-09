var posts_folder = '/blog/posts';
var posts = ['test.html', 'test2.html'];
for (var i = 0; i < posts.length; i++) {
    posts[i] = posts_folder + '/' + posts[i];
}

for (var i = 0; i < posts.length; i++) {
    var sidebar_link_post_html;
    $.get(posts[i], function (data) {
        sidebar_link_post_html = data;
    });
    console.log(sidebar_link_post_html);
    var name = sidebar_link_post_html.match(/<title[^>]*>([^<]+)<\/title>/)[1];
    document.getElementsByClassName('posts')[0].innerHTML = document.getElementsByClassName('posts')[0].innerHTML + '<a href="' + posts[i] + '" class="sidebar_link sidebar_posts_link"><li>' + name + '</li></a>'
}