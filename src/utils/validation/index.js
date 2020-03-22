export const required = value => {
    if(value && value.length !== 0) return undefined;
    return 'Field is required';
};
export const maxLength = (length) => {
    return value => {
        if(value && value.length < length) return undefined;
        return `Max length is ${length} symbols`;
    };
}