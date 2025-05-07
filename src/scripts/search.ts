document.addEventListener("astro:page-load", () => {
  new PagefindUI({ element: "#search", showSubResults: true });

  const searchBtnEl = document.querySelector(".btn--search");
  const searchCloseBtnEl = document.querySelector(".btn--close");
  const searchDialogEl =
    document.querySelector<HTMLDialogElement>(".search-dialog");

  searchBtnEl.addEventListener("click", () => {
    searchDialogEl.showModal();
  });

  searchCloseBtnEl.addEventListener("click", () => {
    searchDialogEl.close();
  });
});
