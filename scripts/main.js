// WishList
(() => {
  const wishList = localStorage.getItem("wishList")
    ? JSON.parse(localStorage.getItem("wishList"))
    : [];
  const likeButtons = document.querySelectorAll(".js-like-button");
  const addText = "Adiconar à lista de interesses";
  const removeText = "Remover da lista de interesses";

  const addToWishList = (id) => {
    wishList.push(id);
    localStorage.setItem("wishList", JSON.stringify(wishList));
  };

  const removeToWishList = (id) => {
    const index = wishList.indexOf(id);
    if (index === -1) return;
    wishList.splice(index, 1);
    localStorage.setItem("wishList", JSON.stringify(wishList));
  };

  const updateTextButton = (id, likeButton) => {
    const isInWishList = wishList.includes(id);
    likeButton.textContent = isInWishList ? removeText : addText;
  };

  likeButtons?.forEach((likeButton) => {
    const id = likeButton.closest("[data-id]").dataset.id;
    updateTextButton(id, likeButton);

    likeButton.addEventListener("click", () => {
      likeButton.textContent = "Carregando...";
      setTimeout(() => {
        const isInWishList = wishList.includes(id);
        isInWishList ? removeToWishList(id) : addToWishList(id);
        updateTextButton(id, likeButton);
      }, 500);
    });
  });
})();
