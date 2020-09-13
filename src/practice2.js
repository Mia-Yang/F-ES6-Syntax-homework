const inject = (items, sections) => {
    sections.sort((x, y) => {return y.index - x.index})
    for (let row of sections) {
        let {content, index} = row;
        items.splice(index, 0, content);
    }
    return items;
}
export { inject };
