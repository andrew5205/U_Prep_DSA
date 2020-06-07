
// Binary Tree - prederve relationship

// Rules:

// each node can only have either 0 1 or 2 nodes and 
// each child can only have one parent.
// each node represents a certain state.

// lookup  -> O( log n)
// insert  -> O( log n)
// delete  -> O( log n)


function BinaryTreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


// perfect binary tree - left and right are balanced 
// 1. doubled nodes in the next level 
// 2. number of nodes on the last level == the sum of the number of nodes on all other level + 1
//  -> half of the nodes are on the last level 

level 0: 2^0 = 1; 
level 1: 2^1 = 2; 
level 2: 2^2 = 4; 
level 3: 2^3 = 8; 

// h: height starting of 1 
# of nodes = 2^h - 1; 
// log nodes = height




// full binary tree 


// https://visualgo.net/bn/bst?slide=1


unbalanced BST is bad: 
it became a linked list 
lookup -> O(n)
insert -> O(n)
delete -> O(n)



// pros:
// O(log n)better than O(n)
// ordered 
// flexible size 


// cons:
// No O(1) operations