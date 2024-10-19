document
  .querySelector(".accordion")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "H3") {
      const currentHeader = event.target;

      const currentContent = currentHeader.nextElementSibling;

      const allContents = document.querySelectorAll(".accordion-content");
      allContents.forEach(function (content) {
        if (content !== currentContent) {
          content.style.display = "none";
        }
      });

      if (currentContent.style.display === "block") {
        currentContent.style.display = "none";
      } else {
        currentContent.style.display = "block";
      }
    }
  });
//
