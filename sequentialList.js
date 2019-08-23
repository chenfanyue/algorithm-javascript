/**
 * NOT for production, only for practice.
 * ADT = abstract data type
 */

const adt = {
  /**
   * use an array as data storage for the sequential list.
   */
  data: [],

  getElementByIndex(index) {
    return this.data[index];
  }

  // get the whole list.
  getList() {
    return this.data;
  }

  getLength() {
    return this.data.length;
  }

  // add elements to the end of the sequential list.
  push(values) {
    let newLength = this.data.push(values);
    return newLength;
  }

  insert(value, index) {
    this.data.splice(index, 0, value);
  }
};
