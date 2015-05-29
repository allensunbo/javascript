var root = {
    key: '',
    children: []
};

function add(key, node) {
    var p = hasKeyInChildren(key.charAt(0), node);
    if (typeof p === 'undefined') {
        node.children.push({
            key: key.charAt(0),
            children: []
        });
        p = node.children.length - 1;
    }

    if (key.slice(1).length > 0)
        add(key.slice(1), node.children[p]);

}

function hasKeyInChildren(key, node) {
    for (var i in node.children) {
        if (node.children[i].key === key) {
            return i;
        }
    }
    return undefined;
}
add('test', root);
add('tad', root);
add('dad', root);
add('tass', root);
console.log(JSON.stringify(root));
