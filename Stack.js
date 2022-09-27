//the end of the list is going to be the beginning to ensure that push and pop operations are constant time
class Stack {
    constructor() {
        this._size = 0;
        this.stack = [];
    }

    push(data) {
        //pushes an element to the stack (the end of the list will be the beginning to have constant time operation) O(1)
        //time complexity O(1)
        this.stack.push(data);
        this._size += 1;
    }

    pop() {
        //remove the element from the top of the stack
        //time complexity O(1)
        this.stack.pop();
        this._size -= 1;
    }

    peek(){
        //get the data from the the top of the stack
        //time complexity O(1)
        return this.stack[this._size-1];
    }


    get size() {
        //get the number of elements in the stack
        ///time complexity O(1)
        return this._size;
    }

    isEmpty(){
        //check to see if the queue is empty
        ///time complexity O(1)
        return this._size == 0;
    }

}
