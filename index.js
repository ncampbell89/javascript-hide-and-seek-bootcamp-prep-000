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
  const node = document.querySelector('div#grand-node')
  var newArr = []

  while(node) {
    if (node.children) {
      node = children.length
    } else {
      newArr
    }
  }

  function find(node) {
    let current = node
    let next = []

    while(current) {
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i])
        }
      }
      current = next.shift()
    }
    return null
  }
  s => (typeof s === 'string' && s < 5)
}
