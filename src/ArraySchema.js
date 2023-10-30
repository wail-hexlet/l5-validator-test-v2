export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }
    
  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }
  
}