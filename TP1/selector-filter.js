const select = document.querySelector("select");
const container = document.querySelector("#container");
const items = container.querySelectorAll("li");

select.addEventListener("change", function() {
  const selectedOption = this.value;
  if (selectedOption === "Alphabétique") {
    // sort the items in alphabetical order
    const sortedItems = [...items].sort((a, b) => {
      const captionA = a.querySelector("figcaption").textContent;
      const captionB = b.querySelector("figcaption").textContent;
      return captionA.localeCompare(captionB);
    });
    
    container.innerHTML = "";
    sortedItems.forEach(item => container.appendChild(item));
  } else if (selectedOption === "Alphabétique Inversée") {
    // sort the items in reverse alphabetical order
      const sortedItems = [...items].sort((a, b) => {
      const captionA = a.querySelector("figcaption").textContent;
      const captionB = b.querySelector("figcaption").textContent;
      return captionB.localeCompare(captionA);
    });

    container.innerHTML = "";
    sortedItems.forEach(item => container.appendChild(item));
  }
});