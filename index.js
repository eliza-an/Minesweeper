// selecting all of the grid items
const gridItems = document.querySelectorAll('.grid-item');

//array of random numbers
const randomArray = [];
while (randomArray.length < 10) {
  const randomIndex = Math.floor(Math.random() * gridItems.length);
  if (!randomArray.includes(randomIndex)) {
    randomArray.push(randomIndex);
  }
}

// Change the values of selected divs to 'x'
randomArray.forEach(index => {
  gridItems[index].textContent = 'x';
  if ((gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x')|| (gridItems[index].textContent ==='x'&& gridItems[index+2].textContent ==='x')|| (gridItems[index].textContent ==='x'&& gridItems[index+6].textContent ==='x')|| (gridItems[index].textContent ==='x'&& gridItems[index+7].textContent ==='x')|| (gridItems[index].textContent ==='x'&& gridItems[index-3].textContent ==='x')|| (gridItems[index].textContent ==='x'&& gridItems[index-4].textContent ==='x')|| (gridItems[index].textContent ==='x'&& gridItems[index-5].textContent ==='x')){
    gridItems[index-1].textContent='2'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x'){
    gridItems[index-1].textContent='3'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x'){
    gridItems[index-1].textContent='4'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x'){
    gridItems[index-1].textContent='5'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x' && gridItems[index-3].textContent ==='x'){
    gridItems[index-1].textContent='6'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x' && gridItems[index-3].textContent ==='x' && gridItems[index-4].textContent ==='x'){
    gridItems[index-1].textContent='7'
  }else if  (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x' && gridItems[index-3].textContent ==='x' && gridItems[index-4].textContent ==='x' && gridItems[index-5].textContent ==='x'){
    gridItems[index-1].textContent='8'
  }
});
