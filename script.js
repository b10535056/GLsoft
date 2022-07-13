const slideimgs = document.querySelectorAll(".slideimgs");

slideimgs.forEach((item) => {
  item.addEventListener("click", (event) => {
    const targetimg = event.target;
    const product =
      targetimg.parentElement.parentElement.parentElement.children[0]
        .children[0];
    product.src = targetimg.src;
  });
});
