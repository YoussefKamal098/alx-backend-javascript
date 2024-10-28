export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    if (typeof code !== 'string') {
      throw TypeError('student must be a String');
    }

    this._code = code;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('student must be a String');
    }

    this._name = newName;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
