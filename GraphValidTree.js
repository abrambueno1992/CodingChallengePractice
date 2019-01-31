/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
   if(n != edges.length+1) return false;
    // each node value has a set filled with null,{}
    // inside of adj, two nodes, adj === [ Set {}, Set {}]
  const adj = Array(n).fill(null).map(r=>new Set());
  const queue = [];
  const visited = new Set();
  for(let edge of edges){
    let [n1,n2] = edge;
      // adj sets
     // set [n1] = n2
      // set [n2] = n1
    adj[n1].add(n2);
    adj[n2].add(n1);
  }
    // start at root, 0
  queue.push(0);
  while(queue.length != 0){
    let cur = queue.shift();
      // if repeated, invalid tree
    if(visited.has(cur)) return false;
      // add cur to visited
      // first is root === 0, then 1 ,and so on
    visited.add(cur);
    for(let n of adj[cur]){
      // n is the next index in adj
      queue.push(n);
        
        // delete cur value, from adj at index n
      adj[n].delete(cur);
    }
  } 
    // if visited.size === n, true
  return visited.size === n;   
};
