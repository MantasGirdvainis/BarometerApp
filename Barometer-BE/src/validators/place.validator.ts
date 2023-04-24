const validate = (place: string): boolean => {

    return /^[a-z]*$/.test(place);
  };
  
  export default validate;