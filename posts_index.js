var posts_folder = 'posts';
var posts = ['test.html'];
for (var i = 0; i < posts.length; i++) {
  posts[i] = posts_folder + '/' + posts[i];
}
console.log(posts);
