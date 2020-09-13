const parseData = (input) => {
    let keys = [];
    for (let col of input.column) {
        keys.push(col.name);
    }

    let output = [];
    for (let row of input.data) {
        let obj = {};
        for (let i in row) {
            obj[keys[i]] = row[i];
        }
        output.push(obj);
    }
    return output;
}
export { parseData };
