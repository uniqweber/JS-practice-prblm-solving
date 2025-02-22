function loadData() {
  // create a new request
  const xhr = new XMLHttpRequest();
  // what to when response arrived
  xhr.onload = function () {
    const placeholder = document.getElementById("demo");
    placeholder.innerHTML = xhr.responseText;
  };
  // prepare request - methods: GET, POST, PUT, DELETE
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
  // send request
  xhr.send();
}
