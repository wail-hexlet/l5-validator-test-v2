import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';

export default class Validator {
  string() {
    const validator = (value) => typeof value === 'string';
    return new StringSchema([validator]);
  }

  array() {
    const validator = (value) => Array.isArray(value);
    return new ArraySchema([validator]);
  }
}
