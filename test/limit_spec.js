import limit from '../src/limit'

describe('limit', () => {
  it('should do nothing if both boundaries are in range', () => {
    let div = document.createElement('div')
    div.innerHTML = '<p>hello</p>'

    let range = document.createRange()
    range.selectNodeContents(div)

    limit(range, div)

    assert.equal(range.commonAncestorContainer, div)
    assert.equal(range.startContainer, div)
    assert.equal(range.startOffset, 0)
    assert.equal(range.endContainer, div)
    assert.equal(range.endOffset, 1)
  })

  it('should move the left boundary to the start of the bounds ', () => {
    let div = document.createElement('div')
    div.innerHTML = '<p>hello</p><p>world</p>'

    let range = document.createRange()
    range.setStart(div, 1)
    range.setEnd(div.lastChild, 1)

    assert.equal(range.commonAncestorContainer, div)
    assert.equal(range.startContainer, div)
    assert.equal(range.startOffset, 1)
    assert.equal(range.endContainer, div.lastChild)
    assert.equal(range.endOffset, 1)

    limit(range, div.lastChild)

    assert.equal(range.commonAncestorContainer, div.lastChild)
    assert.equal(range.startContainer, div.lastChild)
    assert.equal(range.startOffset, 0)
    assert.equal(range.endContainer, div.lastChild)
    assert.equal(range.endOffset, 1)
  })

  it('should move the right boundary to the end of the bounds', () => {
    let div = document.createElement('div')
    div.innerHTML = '<p>hello</p><p>world</p>'

    let range = document.createRange()
    range.setStart(div.firstChild, 0)
    range.setEnd(div, 1)

    assert.equal(range.commonAncestorContainer, div)
    assert.equal(range.startContainer, div.firstChild)
    assert.equal(range.startOffset, 0)
    assert.equal(range.endContainer, div)
    assert.equal(range.endOffset, 1)

    limit(range, div.firstChild)

    assert.equal(range.commonAncestorContainer, div.firstChild)
    assert.equal(range.startContainer, div.firstChild)
    assert.equal(range.startOffset, 0)
    assert.equal(range.endContainer, div.firstChild)
    assert.equal(range.endOffset, 1)
  })

  it('should move both boundaries to the edges of the bounds', () => {
    let div = document.createElement('div')
    div.innerHTML = '<p>goodbye</p><p>cruel</p><p>world</p>'

    let range = document.createRange()
    range.setStart(div, 0)
    range.setEnd(div, 3)

    assert.equal(range.commonAncestorContainer, div)
    assert.equal(range.startContainer, div)
    assert.equal(range.startOffset, 0)
    assert.equal(range.endContainer, div)
    assert.equal(range.endOffset, 3)

    limit(range, div.childNodes[1])

    assert.equal(range.commonAncestorContainer, div.childNodes[1])
    assert.equal(range.startContainer, div.childNodes[1])
    assert.equal(range.startOffset, 0)
    assert.equal(range.endContainer, div.childNodes[1])
    assert.equal(range.endOffset, 1)
  })
})
