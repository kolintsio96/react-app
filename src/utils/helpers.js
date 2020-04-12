export const updateObjInArray = (items, itemId, objPropsName, newData) => {
    return items.map(item => {
        if (item[objPropsName] === itemId) {
            return {
                ...item,
                ...newData
            }
        }
        return item
    })
};