 
 function trierNotCorrected(array) {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }

  export function trier(array) {
    
        // Filtrer uniquement les nombres
        const numbers = array.filter(item => typeof item === 'number');
      
        // Trier les nombres
        numbers.sort((a, b) => a - b);
      
        return numbers;
      
      
  }
  

 