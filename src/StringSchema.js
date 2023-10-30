export default class StringSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }
  
  startsFromUpperCase() {
    const validator = (value) => {
      const regexp = /^[A-Z]/;
      if (value.match(regexp) !== null) {
        return true;
      }
      return false;
    };
    return new StringSchema([...this.validators, validator]);
  }

  length(len) {
    const validator = (value) => {
      if(value.length === len){
        return true;
      }
      return false;
    }
    return new StringSchema([...this.validators, validator]);
  }

  hasExclamation() {
    const validator = (value) => {
      if(value.indexOf("!")>=0){
        return true;
      }
      return false;    
    }
    return new StringSchema([...this.validators, validator]);
  }
}