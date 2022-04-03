

export const required = (value: any) => {
    if (value) return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLenght: any) => (value: any) => {
    if (value.length > maxLenght) return `Max length is ${maxLenght} symbols`;
    return undefined
}