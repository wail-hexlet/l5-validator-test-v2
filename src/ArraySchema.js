export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }
    
  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  maxDepth(dep) {
    const findDepth = (value, currentDepth) => {
      let filteredValues = value.filter((arr) => Array.isArray(arr));
      filteredValues=filteredValues.flat();
      
      if(filteredValues.length!== 0) {
        return findDepth(filteredValues, currentDepth + 1);
      } else {
        return currentDepth;
      }
    };

    const validator = (value) => {
      if(findDepth(value, 0) <= dep){
        return true;
      }
      return false;
    }

    return new ArraySchema([...this.validators, validator]);
  }  
}