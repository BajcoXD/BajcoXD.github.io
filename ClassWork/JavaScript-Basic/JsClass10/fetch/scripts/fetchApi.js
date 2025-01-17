let getPostsBtn = document.getElementById("getPostsBtn");

getPostsBtn.addEventListener("click", function () {
    getData('https://jsonplaceholder.typicode.com/posts')
});
function getData(url) {
  fetch(url)
  .then(res => {
    console.log(res);
    res.json()
    .then(posts => {
        console.log(posts);
        
    })
  })
  .catch(err => {
    console.log(err);
    
  })
}