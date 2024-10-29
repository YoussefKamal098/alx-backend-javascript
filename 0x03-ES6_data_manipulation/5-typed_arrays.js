/**
 * Creates an ArrayBuffer of specified length and inserts an Int8 value at a specific position.
 *
 * @param {Number} length - Length of the ArrayBuffer.
 * @param {Number} position - Position in the ArrayBuffer to set the Int8 value.
 * @param {Number} value - The Int8 value to set at the specified position.
 * @throws {Error} If position is out of range.
 * @returns {DataView} DataView of the ArrayBuffer with the inserted Int8 value.
 */
function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  view.setInt8(position, value);
  return view;
}

export default createInt8TypedArray;
