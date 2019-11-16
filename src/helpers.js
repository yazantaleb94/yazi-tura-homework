export const getRandomElFormArr =  (arr) => {
    const randomItem = arr[Math.floor(Math.random()*arr.length)];
    return randomItem;
};

export const findCountInArray = (allArr, item) => {
    const targetItems = allArr.filter((arrItem) => {
        return arrItem === item;
    });
    return targetItems.length;
};
