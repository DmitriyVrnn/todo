interface ParentArgs<T> {
  nodes?: any;
  key: keyof T;
  target: T[keyof T];
  parent?: T;
  childKey: keyof T;
}

interface FindNodeArgs<T> {
  nodes?: any;
  key: keyof T;
  target: T[keyof T];
  childKey: keyof T;
}

export default class Tree<T> {
  public tree: Array<T>;

  constructor(nodes: Array<T>) {
    this.tree = nodes;
  }

  findNode({ nodes = this.tree, key, target, childKey }: FindNodeArgs<T>): T | undefined {
    for (const node of nodes) {
      if (node[key] === target) return node;
    }

    for (const node of nodes) {
      if (node.childrens) {
        const found = this.findNode({ childKey, nodes: node[childKey], key, target });

        if (found) return found;
      }
    }
  }

  findParent({ nodes = this.tree, key, target, parent, childKey }: ParentArgs<T>): T | undefined {
    for (const node of nodes) {
      if (node[key] === target) return parent;
    }

    for (const node of nodes) {
      if (node[childKey]) {
        const found: T | undefined = this.findParent({
          childKey,
          nodes: node[childKey],
          key,
          target,
          parent: node,
        });

        if (found) return found;
      }
    }
  }
}
