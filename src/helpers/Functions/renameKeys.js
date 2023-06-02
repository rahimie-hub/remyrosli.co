export const renameKeys = (keysMap, obj) => {
    return Object
        .keys(obj)
        .reduce((acc, key) => ({
            ...acc,
            ...{ [keysMap[key] || key]: obj[key] }
        }), {});
}