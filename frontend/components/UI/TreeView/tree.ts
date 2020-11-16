export default class Tree {
  public tree: any;

  constructor(nodes: any) {
    this.tree = nodes;
  }

  find({ nodes = this.tree, key, target }: any): any {
    for (const node of nodes) {
      if (node[key] === target) return node;
    }
    for (const node of nodes) {
      if (node.childrens) {
        const found = this.find({ nodes: node.childrens, key, target });
        if (found) return found;
      }
    }
  }

  findParent({ nodes = this.tree, key, target, parent }: any) {
    for (const node of nodes) {
      if (node[key] === target) return parent;
    }
    for (const node of nodes) {
      if (node.childrens) {
        const found: any = this.findParent({
          nodes: node.childrens,
          key,
          target,
          parent: node,
        });
        console.log("found", found);
        if (found) return found;
      }
    }
  }
}
