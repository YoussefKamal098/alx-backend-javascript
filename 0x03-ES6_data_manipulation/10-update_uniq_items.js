/**
 * Updates the quantity of items in the map where the initial quantity is 1 to 100.
 *
 * @param {Map} itemsMap - A Map containing grocery items and their quantities.
 * @returns {Map} The updated map with modified quantities.
 * @throws {Error} If the argument is not a Map, throws an error with the message "Cannot process".
 */
function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of itemsMap) {
      if (quantity === 1) {
          itemsMap.set(item, 100);
      }
  }

  return itemsMap;
}

export default updateUniqueItems;
