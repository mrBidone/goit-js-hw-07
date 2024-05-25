const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const categoriesData = categories.forEach(category => {
    const categoryTitle = category.querySelector("h2").textContent;
    console.log(`Category: ${categoryTitle}`);

    const categoriesQuantity = category.querySelectorAll("li").length;
    console.log(`Elements: ${categoriesQuantity}`);
});



// КОД ВІД ГРИГОРІЯ
// const categoryList = document.querySelector('#categories');
// console.log(`Number of categories: ${categoryList.children.length} `);
// [...categoryList.children].forEach((item) => {
//   console.log(`Category: ${item.firstElementChild.textContent}`);
//   console.log(`Elements: ${item.lastElementChild.children.length}`);
// })

