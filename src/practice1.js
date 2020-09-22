// TODO 可以思考一下可否用reduce来做
// TODO 使用解构的方式取出data与column
const parseData = (input) => {
    // TODO keys没有太大必要
    let keys = [];
    for (let col of input.column) {
        keys.push(col.name);
    }

    // TODO 使用map做数组与数组的转化，不用声明新数组
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
