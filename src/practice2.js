// TODO 挺不错的，思路正确简洁，且没有逻辑纰漏
const inject = (items, sections) => {
    // TODO 这里箭头函数return可以简写
    sections.sort((x, y) => {return y.index - x.index})
    for (let row of sections) {
        let {content, index} = row;
        items.splice(index, 0, content);
    }
    return items;
}
export { inject };
