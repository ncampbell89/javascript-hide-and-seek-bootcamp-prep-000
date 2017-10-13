function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested div div div div.target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list')
  for (let n = 0; n < lis.length; n++) {
    lis[n].innerHTML = (n + 1).toString()
  }
  return parseInt(lis[n])
}

function deepestChild() {
  let gnode = document.querySelector('div#grand-node div div div div')
  return gnode
}
