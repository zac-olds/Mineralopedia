// Capitalizes the string that is passed in to the function
export const capitalStr = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Converts plain text chemcial formulas and converts them so that they display with the prop subtext
export const convertChemical = (str) => {
  // split the string
  // loop over array if element is a number then run .sub, if not return the element
    return str.split('').map((e) => {
      if (Number(e)) {
        return e.sub()
      } else {
        return e
      }
    }).join('');
  }