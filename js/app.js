document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');

  const formInput = document.querySelector("#new-item-form");
  formInput.addEventListener("submit", handleFormSubmit);


});

const handleFormSubmit = function(event) {
  event.preventDefault();
  console.dir(event);

  const bookList = document.createElement("ul")

  const newH2Title = document.createElement("li");
  newH2Title.textContent = `Title: ${this.title.value}`
  bookList.appendChild(newH2Title);

  const newH2Author = document.createElement("li");
  newH2Author.textContent = `Author: ${this.author.value}`
  bookList.appendChild(newH2Author);

  const newH2Catagory = document.createElement("li");
  newH2Catagory.textContent = `Category: ${this.category.value}`
  bookList.appendChild(newH2Catagory);

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(bookList);

  const formReset = document.querySelector("#new-item-form");
  formReset.reset();

  const deleteButton = document.createElement("button");
  readingList.appendChild(deleteButton);

};


const deleteButton = document.querySelector("button");
deleteButton.addEventListener("submit", handleDelete);

// const handleDelete = function(event) {
//   console.dir(event);
//   const toDelete = document.querySelector("ul");
//   toDelete.removeChild(toDelete.firstChild);
// };


// const formResultTitle = document.querySelector("#title");
// formResultTitle.textContent = `Title: ${event.target.value}`
