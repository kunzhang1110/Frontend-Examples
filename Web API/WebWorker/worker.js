var i = 0;

function count() {
  i = i + 1;
  postMessage(i);
  setTimeout("timedCount()", 500);
}

count();
