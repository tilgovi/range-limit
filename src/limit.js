import contains from 'dom-contains'

export default function limit(range, bounds) {
  let sc = range.startContainer
  let so = range.startOffset
  let ec = range.endContainer
  let eo = range.endOffset

  if (!contains(bounds, sc)) {
    sc = bounds
    so = 0
  }

  if (!contains(bounds, ec)) {
    ec = bounds
    eo = (bounds.nodeType === 3) ? bounds.length : bounds.childNodes.length
  }

  range.setStart(sc, so)
  range.setEnd(ec, eo)
}
