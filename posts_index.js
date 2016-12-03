var posts_folder = '/posts';
var posts = ['test.html'];
for (var i = 0; i < posts.length; i++) {
  posts[i] = posts_folder + '/' + posts[i];
}
for (var i = 0; i < posts.length; i++) {
    var name = '[name]'
    document.getElementsByClassName('posts')[0].innerHTML = document.getElementsByClassName('posts')[0].innerHTML + '<a href="' + posts[i] + '" class="sidebar_link sidebar_posts_link"><li>' + name + '</li></a>'
}