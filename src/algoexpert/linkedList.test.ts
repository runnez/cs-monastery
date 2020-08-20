export class Node {
  value: number;

  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) time, O(1) space
  setHead(node: Node) {
    if (this.head) {
      this.insertBefore(this.head, node)
    } else {
      this.head = node;
      this.tail = node;
    }
  }

  // O(1) time, O(1) space
  setTail(node: Node) {
    if (this.tail) {
      this.insertAfter(this.tail, node)
    } else {
      this.tail = node;
      this.head = node;
    }
  }

  // O(1) time, O(1) space
  insertBefore(node: Node, nodeToInsert: Node) {
    if ([this.head, this.tail].includes(nodeToInsert)) return;

    this.remove(nodeToInsert);

    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev) {
      node.prev.next = nodeToInsert;
    }

    node.prev = nodeToInsert;

    if (this.head === node) {
      this.head = nodeToInsert;
    }
  }

  // O(1) time, O(1) space
  insertAfter(node: Node, nodeToInsert: Node) {
    if ([this.head, this.tail].includes(nodeToInsert)) return

    this.remove(nodeToInsert)

    if (node.next) {
      node.next.prev = nodeToInsert
    }

    nodeToInsert.next = node.next
    node.next = nodeToInsert
    nodeToInsert.prev = node

    if (node === this.tail) {
      this.tail = nodeToInsert
    }
  }

  // O(p) - p is input position, O(1) S
  insertAtPosition(position: number, nodeToInsert: Node) {
    const node = this.findByPos(position)

    if (node && node !== nodeToInsert) {
      this.insertBefore(node, nodeToInsert)
    } else {
      if (!this.head) {
        this.head = nodeToInsert
        this.tail = nodeToInsert
      }
    }
  }

  // O(n) time, O(1) space
  // where n is count of node with exact value
  removeNodesWithValue(value: number) {
    this.findByValue(value).forEach(node => this.remove(node))
  }

  // O(1) time, O(1) space
  remove(node: Node) {
    if (this.head === node) {
      this.head = node.next
    }

    if (this.tail === node) {
      this.tail = node.prev
    }

    if (node.prev) {
      node.prev.next = node.next
    }

    if (node.next) {
      node.next.prev = node.prev
    }

    node.next = null
    node.prev = null
  }

  // O(n) T, O(n) S
  // where n is count of node with exact value
  containsNodeWithValue(value: number) {
    return this.findByValue(value).length > 0
  }

  private findByValue(value: number) {
    const nodes = []
    let cursor = this.head

    while (cursor) {
      if (value === cursor.value) {
        nodes.push(cursor)
      }

      cursor = cursor.next;
    }

    return nodes;
  }

  private findByPos(index: number) {
    let cursor = this.head
    let i = 1;

    while (cursor) {
      if (i === index) {
        return cursor
      }

      cursor = cursor.next;
      i++;
    }

    return undefined
  }
}

function getNodeValuesHeadToTail(linkedList: DoublyLinkedList) {
  const values = [];
  let node = linkedList.head;
  while (node !== null) {
    values.push(node.value);
    node = node.next;
  }
  return values;
}

function getNodeValuesTailToHead(linkedList: DoublyLinkedList) {
  const values = [];
  let node = linkedList.tail;
  while (node !== null) {
    values.push(node.value);
    node = node.prev;
  }
  return values;
}

function bindNodes(nodeOne: Node, nodeTwo: Node) {
  nodeOne.next = nodeTwo;
  nodeTwo.prev = nodeOne;
}

describe('LinkedList', () => {
  test('base scenarios', () => {
    const linkedList = new DoublyLinkedList();
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const three2 = new Node(3);
    const three3 = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    const six = new Node(6);

    bindNodes(one, two);
    bindNodes(two, three);
    bindNodes(three, four);
    bindNodes(four, five);
    linkedList.head = one;
    linkedList.tail = five;

    expect(getNodeValuesHeadToTail(linkedList)).toEqual([1, 2, 3, 4, 5]);
    linkedList.setHead(four);
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 3, 5]);
    expect(getNodeValuesTailToHead(linkedList)).toEqual([5, 3, 2, 1, 4]);
    linkedList.setTail(six);
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 3, 5, 6]);
    expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 5, 3, 2, 1, 4]);
    linkedList.insertBefore(six, three);
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 5, 3, 6]);
    expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 3, 5, 2, 1, 4]);
    linkedList.insertAfter(six, three2);
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 5, 3, 6, 3]);
    expect(getNodeValuesTailToHead(linkedList)).toEqual([3, 6, 3, 5, 2, 1, 4]);
    linkedList.insertAtPosition(1, three3)
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([3, 4, 1, 2, 5, 3, 6, 3]);
    expect(getNodeValuesTailToHead(linkedList)).toEqual([3, 6, 3, 5, 2, 1, 4, 3]);
    linkedList.removeNodesWithValue(3)
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 2, 5, 6]);
    expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 5, 2, 1, 4]);
    linkedList.remove(two);
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([4, 1, 5, 6]);
    expect(getNodeValuesTailToHead(linkedList)).toEqual([6, 5, 1, 4]);
  });

  test('setHead', () => {
    const linkedList = new DoublyLinkedList();
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    linkedList.setHead(five)
    linkedList.setHead(four)
    linkedList.setHead(three)
    linkedList.setHead(two)
    linkedList.setHead(one)
    expect(getNodeValuesHeadToTail(linkedList)).toEqual([1, 2, 3, 4, 5]);
  })

  test('one member initialization', () => {
    const list = new DoublyLinkedList()
    const one = new Node(1);
    list.setHead(one);
    expect(getNodeValuesHeadToTail(list)).toEqual([1])
    expect(getNodeValuesTailToHead(list)).toEqual([1])
  })

  test('insertAtPosition', () => {
    const list = new DoublyLinkedList()
    const one = new Node(1);
    const two = new Node(2);
    list.insertAtPosition(1, one);
    expect(getNodeValuesHeadToTail(list)).toEqual([1])
    expect(getNodeValuesTailToHead(list)).toEqual([1])
    list.insertAtPosition(1, two);
    expect(getNodeValuesHeadToTail(list)).toEqual([2, 1])
    expect(getNodeValuesTailToHead(list)).toEqual([1, 2])
  })
})
