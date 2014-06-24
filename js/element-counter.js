(function (window, undefined) {
  //  Counts all DOM elements by name.
  var forEach = Array.prototype.forEach,
    counter = {},
    
    incrementElementCount = function (elementName) {
      if (counter.hasOwnProperty(elementName)) {
        counter[elementName] += 1;
      } else {
        counter[elementName] = 1;
      }
    },
    
    processNode = function (node) {
      var currentNode = node;
      if (currentNode.nodeType === currentNode.ELEMENT_NODE) {
        incrementElementCount(currentNode.nodeName);
        if (currentNode.hasChildNodes) {
          forEach.call(currentNode.childNodes, function (childNode) {
            if (childNode.nodeType === currentNode.ELEMENT_NODE) {
              processNode(childNode);
            }
          });
        }
      }
    };

  processNode(window.document.firstElementChild);
  
  console.log(counter);

}(this));