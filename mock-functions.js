function range() {
  const p = document.createElement('p');
  let range = new Range();
  p.innerHTML = 'hello there';
  range.setStart(p.firstChild, 0);
  range.setEnd(p.firstChild, 5);

  return range;
}

function changeColor(color) {
  const newRange = range();
  const selectionContents = newRange.extractContents();
  const span = document.createElement('span');
  span.style.color = color;
  span.appendChild(selectionContents);
  newRange.insertNode(span);
  return span;
}

function changeHeader(header) {
  const newRange = range();
  const selectionContents = newRange.extractContents();
  const headerText = document.createElement(header);
  headerText.appendChild(selectionContents);
  newRange.insertNode(headerText);
  return headerText;
}

function italic() {
  const newRange = range();
  const selectionContents = newRange.extractContents();
  const span = document.createElement('span');
  span.style.fontStyle = 'italic';
  span.appendChild(selectionContents);
  newRange.insertNode(span);
  return span;
}

module.exports = {
  italic,
  changeColor,
  changeHeader,
  range,
};
