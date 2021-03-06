var BinarySearchTree = function() {
  
  var Node = function(key) {
  	this.key = key;
  	this.left = null;
  	this.right = null;
  }
  
  var root = null;
  
  var insertNode = function(node, newNode) {
    if (newNode.key < node.key) {
      !node.left ? node.left = newNode : insertNode(node.left, newNode);
    } else {
      !node.right ? node.right = newNode : insertNode(node.right, newNode);
    }	
  };
  
  var searchNode = function(node, key) {
    if (node === null) {
      return false;	
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);	
    } else {
      return true;	
    }
  };
  
  var findMinNode = function() {
    if (root) {
      var current = root;
      while (current.left) {
        current = current.left;  	
      }
      return current;
    }
    return null;	
  };
  
  var removeNode = function(node, key) {
    if (node === null) {
      return null;
    } if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.key, key);
      return node;
    } else { 
      // if node is a leaf node
      if (!node.left && node.right) {
        node = null;
        return node;
      }
      // if node only has one child
      if (!node.left) {
        node = node.right;
        return node;
      } else if (!node.right) {
        node = node.left;
        return node;
      }
      // node with two children
      var aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };
 
  
  this.insert = function(key) {
  	var newNode = new Node(key);
  	
    if (!root) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  
  this.search = function(key) {
    return searchNode(root, key);
    
  };
  
  this.inOrderTraverse = function(callback) {
  	var inOrderTraverseNode = function(node, callback) {
  	  if (!node) {
  	    inOrderTraverseNode(node.left, callback);
  	    callback(node.key);
  	    inOrderTraverseNode(node.right, callback);
  	  }	
  	};
    inOrderTraverseNode(root, callback);	
  };
  
  this.preOrderTraverse = function() {
  	var preOrderTraverseNode = function(node, callback) {
  	  if (!node) {
  	  	callback(node.key);
  	    preOrderTraverseNode(node.left, callback);
  	    preOrderTraverseNode(node.right, callback);
  	  }	
  	};
    preOrderTraverseNode(root, callback);	
  };
  
  this.postOrderTraverse = function() {
    var postOrderTraverseNode = function(node, callback) {
  	  if (!node) {
  	    postOrderTraverseNode(node.left, callback);
  	    postOrderTraverseNode(node.right, callback);
  	  	callback(node.key);
  	  }	
  	};
    postOrderTraverseNode(root, callback);
  };
  
  this.min = function() {
    if (root) {
      var current = root;
      while (current.left) {
        current = current.left;  	
      }
      return current.key;
    }
    return null;	
  };
  
  this.max = function() {
    if (root) {
      var current = root;
        while (current.right) {
          current = current.right;  	
        }
        return current.key;
    }
    return null;	
  };
  
  this.remove = function(key) {
    root = removeNode(root, key);
  };
  
};
