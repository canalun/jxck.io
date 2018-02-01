'use strict';
let log = console.log.bind(console);

function loop(ws, n) {
  if(n === 0) return ws.close();
  ws.onmessage = (ev) => {
    console.log('send', ev.data);
    loop(ws, n - 1);
  }
  let rand = btoa(Math.random());
  console.log('recv', rand);
  ws.send(rand);
}

let ws = new WebSocket('ws://localhost:3000', [])
ws.onopen = (e) => {
  // loop(ws, 10)
  let blob = new Blob(Array.from(new Array(2**16-1)).fill(1))
  console.log(blob.size)
  ws.send(blob)
}
