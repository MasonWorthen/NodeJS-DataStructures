class Queue{
    constructor() {
        this.list = new LinkedList();
    }
    queue(data){
        // add an element to the end of the queue O(1)
        //time complexity O(1)
        this.list.prepend(data);

    }
    dequeue() {
        //removes the element from the front of the queue  O(1)
        //time complexity O(1)
        this.list.remove_end();
    }

    peek(){
        //get the data from the the front of the queue O(1)
        //time complexity O(1)
        return this.list.tail.data;
    }

    size(){
        //returns the number of elements inside of the queue
        //time complexity O(1)
        return this.list.size;
    }

    isEmpty(){
        //check to see if the queue is empty
        //time complexity O(1)
        return this.list.size == 0;
    }
}

class LinkedList{
    constructor() {
        this._size = 0;
        this._head = null;
        this._tail = null;
    }
    get size() {
        return this._size;
    }

    set size(value) {
        this._size = value;
    }

    get head() {
        return this._head;
    }

    set head(value) {
        this._head = value;
    }

    get tail() {
        return this._tail;
    }

    set tail(value) {
        this._tail = value;
    }

    printForward(){
        let node = this._head;
        let list_string = "";
        while (node != null)
        {
            list_string += node.data +",";
            node = node.next;
        }
        return list_string;
    }
    prepend(data){
        let n1 = new Node(data);

        if(this._size == 0){
            this._head = n1;
            this._tail = n1;
            this._size  +=1;
        }
        else{
            n1.next = this._head;
            this._head.prev = n1;
            this._head = n1;
            this._size += 1;
        }
    }

    append(data){
        let n1 = new Node(data);

        if(this._size == 0){
            this._head = n1;
            this._tail = n1;
            this._size  +=1;
        }

        else{
            let prev_node = this._tail;
            this._tail = n1;
            this._tail.prev = prev_node
            prev_node.next = this._tail;
            this._size  +=1;
        }
    }

    remove_end(){

        if(this.size == 0){
            return null;
        }
            let new_tail = this._tail.prev;
            new_tail.next = null
            this._tail.next = null;
            this._tail.prev = null;
            this._tail = new_tail;
            this._size -= 1;
    }
    remove_beginning(){

        if(this.size == 0){
            return null;
        }

        let new_head = this._head.next;
        new_head.prev = null
        this._head.next = null;
        this._head.prev = null;
        this._head = new_head;
        this._size -= 1;
    }

}
class Node {
    constructor(data) {
        this._next = null;
        this._prev = null;
        this._data = data;
    }

    get prev() {
        return this._prev;
    }

    set prev(value) {
        this._prev = value;
    }

    get next() {
        return this._next;
    }

    set next(value) {
        this._next = value;
    }

    get data() {
        return this._data;
    }

    set data(value) {
        this._data = value;
    }
}


