//https://leetcode.com/problems/lru-cache/

const Node = function(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
};

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.caches = new Map();
    
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.prev = null;
    this.head.next = this.tail;
    this.tail.next = null;
    this.tail.prev = this.head;
};

LRUCache.prototype.deleteNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

LRUCache.prototype.addToHead = function(node) {
    node.next = this.head.next;
    node.next.prev = node;
    node.prev = this.head;
    this.head.next = node;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.caches.has(key)) {
        return -1;
    }
    
    const node = this.caches.get(key);
    this.deleteNode(node);
    this.addToHead(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.caches.get(key);
    
    if (node) {
        node.val = value;
        this.deleteNode(node);
        this.addToHead(node);
    } else {
        node = new Node(key, value);
        this.caches.set(key, node);
        if (this.size < this.capacity) {
            this.size++;
            this.addToHead(node);
        } else {
            this.caches.delete(this.tail.prev.key);
            this.deleteNode(this.tail.prev);
            this.addToHead(node);
        }
    }
 
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
