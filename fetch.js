const url =
  "https://raw.githubusercontent.com/kuka0len/dom-chess/master/README.md";

fetch(url).then((response) => {
  const reader = response.body.getReader();
  function push() {
    reader.read().then(({ done, value }) => {
      document.getElementById("content").innerHTML += marked(
        String(value)
          .split(",")
          .map((item) => String.fromCharCode(item))
          .join("")
      );
      if (done) {
        return;
      }
      push();
    });
  }
  push();
});
