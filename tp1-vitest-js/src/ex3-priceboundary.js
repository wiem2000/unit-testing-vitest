

export function isPriceInRangeNotCorrected(price, min, max) {
    return price >= min && price <= max;
  }

  export function isPriceInRange(price, min, max) {
    // Vérifie si la plage est inversée
    if (min > max) {
      // Si la plage est inversée, inverse les limites
      const temp = min;
      min = max;
      max = temp;
    }
  
    // Vérifie si le prix est dans la plage entre min et max
    return price >= min && price <= max;
  }
  