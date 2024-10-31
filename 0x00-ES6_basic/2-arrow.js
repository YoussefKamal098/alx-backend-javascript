/**
 * Represents a list of neighborhoods in San Francisco.
 *
 * This function initializes an object with a list of neighborhoods
 * and provides a method to add new neighborhoods to that list.
 */
function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this; // Preserve the context of `this`

  /**
   * Adds a new neighborhood to the list.
   *
   * @param {string} newNeighborhood - The name of the neighborhood to add.
   * @returns {Array<string>} The updated list of neighborhoods.
   *
   * @example
   * const neighborhoods = new getNeighborhoodsList();
   * neighborhoods.addNeighborhood('Nob Hill'); // ['SOMA', 'Union Square', 'Nob Hill']
   */
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

export default getNeighborhoodsList;
