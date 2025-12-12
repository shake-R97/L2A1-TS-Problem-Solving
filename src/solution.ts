const formatValue = (value: string | number | boolean) => {

    if (typeof value === 'string') {
        return value.toUpperCase();
    }

    if (typeof value === 'number') {
        return value * 10;
    }

    if (typeof value === 'boolean') {
        return !value;
    }

    return undefined;
}







const getLength = (value: string | number[] ) => {
    
    if (typeof value === 'string'){
        return value.length;
    }

    if (Array.isArray(value)){
        return value.length;
    }
    return undefined;
}






