export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('name must be a String');
    }

    if (typeof code !== 'string') {
      throw TypeError('Code must be a String');
    }

    this._name = name;
    this._code = code;
  }

  get [Symbol.toStringTag]() {
    return `[object ${this._code}]`;
  }
}
