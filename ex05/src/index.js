let shoppingList = new Map([
    ["Banana", "3"],
    ["Pineapple", "5"],
    ["Pear", "2"],
    ["Carrot", "10"],
    ["Apple", "1.5"]
]);

const arrKey = [];
for (let key of shoppingList.keys()) {
    arrKey.push(key);
}
for (const key of arrKey) {
    console.log(`groceries: ${key}`);
}

const arrValue = [];
for (let value of shoppingList.values()) {
    arrValue.push(value)
};
for (const value of arrValue) {
    console.log(`amount: ${value}`);
}

shoppingList.forEach((value, key) => {
    console.log(`['${key}', ${value}]`)
})

module.exports = {
    shoppingList,
    arrKey,
    arrValue
}