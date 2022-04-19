let numbers = [7,3,5,2,4,6,1,8,9];

const shuffle = () => {
    let currentIndex = numbers.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [numbers[currentIndex], numbers[randomIndex]] = [
        numbers[randomIndex], numbers[currentIndex]];
    }
    document.getElementById('grid').innerHTML = numbers.map((number) => `<div class=${`class-${number}`}>${number}</div>`).join('')
  }
  

  const sorting = () => {
    const sortedNumbers = numbers.sort();
    document.getElementById('grid').innerHTML = sortedNumbers.map((number) => `<div class=${`class-${number}`}>${number}</div>`).join('')
  }
  
  shuffle()
