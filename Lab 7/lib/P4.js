const newPost = {
  userId: 11,
  title: "Volleyball game this evening!",
  body: "The game is between Thailand and Vietnam.",
  id: 101,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
  body: JSON.stringify(newPost),
})
  .then((response) => response.json())
  .then((data) => {
    const result = document.createElement("div");
    result.innerText = JSON.stringify(data);
    document.body.appendChild(result);

    const message = document.createElement("div");
    message.innerText = `The new post has title as ${data.title} and body as ${data.body}.`;
    document.body.appendChild(message);
});
