const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
const chevrons = document.querySelectorAll(".chevron-down");

accordionItemHeaders.forEach((accordionItemHeader, index) => {
  accordionItemHeader.addEventListener("click", (event) => {
    chevrons[index].classList.toggle("chevron-clicked");
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

chevrons.forEach((el) => {});
