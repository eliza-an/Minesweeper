// selecting all of the grid items
const gridItems = document.querySelectorAll('.grid-item');

//array of random numbers
const randomArray = [];
while (randomArray.length < 20) {
  const randomIndex = Math.floor(Math.random() * gridItems.length);
  if (!randomArray.includes(randomIndex)) {
    randomArray.push(randomIndex);
  }
}

// Change the values of selected divs to 'x'
randomArray.forEach(index => {
  gridItems[index].textContent = 'x';
if(index===2 || index===3  || index===4 ||index===5|| index===6|| index===7  || index===12 ||index===13|| index===14 || index===15 ||index===16|| index===17 || index===22 ||index===23 || index===24 || index===25 || index===26  || index===27|| index===32 ||index===33|| index===34 || index===35 ||index===36|| index===37 || index===42 ||index===43|| index===44 || index===45 ||index===46|| index===47 || index===52 ||index===53|| index===54 || index===55 ||index===56|| index===57 || index===62 ||index===63|| index===64 || index===65 ||index===66|| index===67 || index===72 ||index===73|| index===74 || index===75 ||index===76|| index===77 || index===82 ||index===83|| index===84 || index===85 ||index===86|| index===87 || index===92 ||index===93|| index===94 || index===95 ||index===96|| index===97 ){

  if(gridItems[index+5].textContent !='x' && gridItems[index+2].textContent !='x'&& gridItems[index+6].textContent !='x' && gridItems[index+7].textContent !='x' && gridItems[index-3].textContent !='x' && gridItems[index-4].textContent !='x' && gridItems[index-5].textContent !='x' && gridItems[index+1].textContent !='x'){
    gridItems[index+1].textContent='1'
  }else if (gridItems[index-1].textContent !='x'&& (gridItems[index+5].textContent ==='x'|| gridItems[index+2].textContent ==='x'|| gridItems[index+6].textContent ==='x'||  gridItems[index+7].textContent ==='x'|| gridItems[index-3].textContent ==='x'|| gridItems[index-4].textContent ==='x'|| gridItems[index-5].textContent ==='x')){
    gridItems[index+1].textContent='2'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x'){
    gridItems[index+1].textContent='3'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x'){
    gridItems[index+1].textContent='4'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x'){
    gridItems[index+1].textContent='5'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x' && gridItems[index-3].textContent ==='x'){
    gridItems[index+1].textContent='6'
  }else if (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x' && gridItems[index-3].textContent ==='x' && gridItems[index-4].textContent ==='x'){
    gridItems[index+1].textContent='7'
  }else if  (gridItems[index].textContent ==='x'&& gridItems[index+5].textContent ==='x' && gridItems[index+6].textContent ==='x' && gridItems[index+7].textContent ==='x' && gridItems[index+2].textContent ==='x' && gridItems[index-3].textContent ==='x' && gridItems[index-4].textContent ==='x' && gridItems[index-5].textContent ==='x'){
    gridItems[index+1].textContent='8'
  }
}});

