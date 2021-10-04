# Artyom Lobodenko
----------
### Begginer JavaScript developer

### Hi! I was born in 1994. My mind is always open for new kind of things. I like travelling, reading books and attendings shows of my favourite music artists all aroung the continent. Currently I'm trying to study JavaScript on RS School Courses and hope to start working as a JavaScript developer in the future.
- Education: graduated, 2017 - Belarusian National Technical University: Engineer-Economist
- Languages: Russinan (native), English (B2)
- Location: Minsk, Belarus
- Currently RS School JavaScript/Front-end 2021Q3 Student

### My Skills:
- **HTML:** 1/5
- **CSS:** 1/5
- **JavaScript:** 1/5
- **Photoshop:** 2/5

### Code example:
- **JavaScript**
```javascript
class Node {
                    constructor(value = null, left = null, right = null) {
                      this.value = value;
                      this.right = right;
                      this.left = left;
                    }

                    toString() {
                      return JSON.stringify(this);
                    }
                }

                class BinarySearchTree {
                  constructor() {
                    this.root = null;
                  }

                  /*
                   * A recursive in-order traversal. Takes a callback function, process, which is applied to each node.
                   */
                  printInOrder(process) {
                    let inOrder = (node) => {
                      if (node.left !== null) {
                        inOrder(node.left);
                      }

                      process.call(this, node);

                      if (node.right !== null) {
                        inOrder(node.right);
                      }
                    };

                    inOrder(this.root);
                  }

                  /*
                   * A recursive pre-order traversal.
                   */
                  printPreOrder(process) {
                    let preOrder = (node) => {
                      process.call(this, node);

                      if (node.left !== null) {
                        preOrder(node.left);
                      }

                      if (node.right !== null) {
                        preOrder(node.right);
                      }
                    }

                    preOrder(this.root);
                  }

                  /*
                   * A recursive post-order traversal.
                   */
                  printPostOrder(process) {
                    let postOrder = (node) => {
                      if (node.left !== null) {
                        postOrder(node.left);
                      }

                      if (node.right !== null) {
                        postOrder(node.right);
                      }

                      process.call(this, node);
                    }

                    postOrder(this.root);
                  }

                  traverseBFS() {
                    let result = []
                    let queue = [this.root];
                    while (queue.length > 0) {

                      let node = queue.shift();

                      result.push(node.value);

                      if (node.left) {
                        queue.push(node.left);
                      }

                      if (node.right) {
                        queue.push(node.right);
                      }
                    }
                    return result;
                  }

                  traverseZigZag() {
                    let stack = [this.root];
                    // store next level node in nextLevel because order changes
                    let nextLevel = [];
                    let fromLeft = true;
                    let result = [];

                    while(stack.length) {
                      let len = stack.length;
```
- **CSS**
```javascript 
 .skill_stars {
            width: 50px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
          }

          .footer_logo {
            display: block;
            width: 35px;
            height: 35px;
            margin: 0 auto;
            transition: 1s;
          }
          
          .footer_logo:hover {
            transform: scale(1.2);
          }
```
### Contacts:
- **Discord:** Artsem Labadzenka (brokezm) #8575
- **E-mail:** brokesmail@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/artyom-lobodenko-87291b8a/
- **Facebook:** https://www.facebook.com/artyom.lobodenko
