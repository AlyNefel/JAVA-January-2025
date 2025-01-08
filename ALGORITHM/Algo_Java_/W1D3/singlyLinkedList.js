/**
 * A class to represents a single item of a SinglyLinkedList that can be
 * linked to other Node instances to form a list of linked nodes.
 */
class Node {
  /**
   * Constructs a new Node instance. Executed when the 'new' keyword is used.
   * @param {any} data The data to be added into this new instance of a Node.
   *    The data can be anything, just like an array can contain strings,
   *    numbers, objects, etc.
   * @returns {Node} This new Node instance is returned automatically without
   *    having to be explicitly written (implicit return).
   */
  constructor(data) {
    this.data = data;
    /**
     * This property is used to link this node to whichever node is next
     * in the list. By default, this new node is not linked to any other
     * nodes, so the setting / updating of this property will happen sometime
     * after this node is created.
     *
     * @type {Node|null}
     */
    this.next = null;
  }
}

const node1= new Node(20)
const node2= new Node(10)

/**
 * This class keeps track of the start (head) of the list and to store all the
 * functionality (methods) that each list should have.
 */
class SinglyLinkedList {
  /**
   * Constructs a new instance of an empty linked list that inherits all the
   * methods.
   * @returns {SinglyLinkedList} The new list that is instantiated is implicitly
   *    returned without having to explicitly write "return".
   */
  constructor() {
    /** @type {Node|null} */
    this.head = null;
  }

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean}
   */
  isEmpty() {
    // TODO: your code here
    return this.head === null;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBack(data) {
    // TODO: your code here
    const newBack = new Node(data);
    if (this.isEmpty()) {
      this.head = newBack;
      return this;
    }
    let runner = this.head;
    while (runner.next !== null) {
      runner = runner.next;
    }
    runner.next = newBack;
    return this;
  }

  /**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(n) linear due to the call stack.
   * @param {any} data The data to be added to the new node.
   * @param {?Node} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackRecursive(data, runner = this.head) {
    // TODO: your code here
    if (this.isEmpty()) {
      this.head = new Node(data);
      return this;
    }
    if (runner.next === null) {
      runner.next = new Node(data);
      return this;
    }
    return this.insertAtBackRecursive(data, runner.next);
  }

  /**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtBackMany(vals) {
    for (const item of vals) {
      this.insertAtBack(item);
    }
    return this;
  }

  /**
   * Converts this list into an array containing the data of each node.
   * - Time: O(n) linear.
   * - Space: O(n).
   * @returns {Array<any>} An array of each node's data.
   */
  toArr() {
    //create an empty array to store the result
    const arr = [];
    //create a variable initialized to the head of the singly linked list
    let runner = this.head;

    //loop while the current node is not null
    while (runner) {
      //push the data of the current node to the result array
      arr.push(runner.data);
      //move the current node to its next node
      runner = runner.next;
    }
    //return the result array
    return arr;
  }


  //TODO
  /**
   * Determines the length of this list.
   * - Time: O(n) linear, n = length of list
   * - Space: O(1) constant
   * @returns {number} The length.
   */
  length() {
    // TODO: your code here
    let runner = this.head;
    let count =0;
    while(runner){
      count++;
      runner=runner.next;
    }
    return count ;
  }

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SinglyLinkedList} This list.
   */
  insertAtFront(data) {
    // TODO: your code here
  const newNode = new Node(data)
  newNode.next= this.head
  this.head = newNode
  return this ;
  }

  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    // TODO: your code here
    if (this.isEmpty()){
      return null;
    }
    const temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }

  // EXTRA
  /**
   * Calculates the average of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    // TODO: your code here
    let runner = this.head
    let sum = 0;
    let count= 0;
    while(runner){
      sum+=runner.data
      count++;
      runner=runner.next
    }
    return sum/count;
  }
}
// Testing the functions
const testList = new SinglyLinkedList().insertAtBackMany([10, 20, 30, 40]);

console.log("Initial List:", testList.toArr());

// Test length
console.log("Length of list:", testList.length());

// Test insertAtFront
testList.insertAtFront(5);
console.log("After insertAtFront(5):", testList.toArr());

// Test removeHead
const removedHead = testList.removeHead();
console.log("After removeHead():", testList.toArr(), "| Removed head data:", removedHead);
// Test average
console.log("Average of list:", testList.average());


const emptyList = new SinglyLinkedList();

const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new SinglyLinkedList().insertAtBackMany([
  -5, -10, 4, -3, 6, 1, -7, -2,
]);

/* node 4 connects to node 1, back to head */
const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
perfectLoopList.head.next.next.next = perfectLoopList.head
/* node 4 connects to node 2 */
perfectLoopList.head.next.next.next = perfectLoopList.head.next

const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
  1, 1, 1, 2, 3, 3, 4, 5, 5,
]);

// Print your list like so:
console.log(sortedDupeList.toArr());
