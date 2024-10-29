/**
 * Returns a map of groceries with specified items and quantities.
 *
 * @returns {Map} A Map containing grocery items and their quantities.
 */
function groceriesList() {
  // return new Map([
  //     ['Apples', 10],
  //     ['Tomatoes', 10],
  //     ['Pasta', 1],
  //     ['Rice', 1],
  //     ['Banana', 5]
  // ]);

  const groceries = new Map();

  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  return groceries;
}

export default groceriesList;
