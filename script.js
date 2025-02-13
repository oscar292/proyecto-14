const flipBook = (elBook) => {
  console.log("Initializing book...");
  elBook.style.setProperty("--c", 0); // Set current page
  elBook.querySelectorAll(".page").forEach((page, idx) => {
    page.style.setProperty("--i", idx);
    page.addEventListener("click", (evt) => {
      if (evt.target.closest("a")) return;
      const curr = evt.target.closest(".back") ? idx : idx + 1;
      console.log("Page clicked, current page:", curr);
      elBook.style.setProperty("--c", curr);
    });
  });
};

document.querySelectorAll(".book").forEach(flipBook);
