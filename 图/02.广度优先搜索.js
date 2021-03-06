let Graph = require('./01.创建Graph类');
let Queue = require('./Queue');

/**
 * 广度优先搜索
 */

let {
  initializeColor,
  printNode
} = require('./util');


class SearchGraph extends Graph {
  bfs(v, callback) {
    let color = initializeColor(this.vertices);
    let queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
      let u = queue.dequeue();
      let neighbors = this.adjList.get(u);
      color[u] = 'grey';
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === 'white') {
          color[w] = 'grey';
          queue.enqueue(w);
        }
      }
      color[u] = 'black';
      if (callback) {
        callback(u);
      }
    }
  }
}

let graph = new SearchGraph();
let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVerties(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

graph.bfs(myVertices[0], printNode);