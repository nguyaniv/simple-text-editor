const userInput = document.querySelector('p');

const storageData = JSON.parse(localStorage.getItem('userTextData'));
let userTextData = storageData || '';

function createRange(ele) {
  const range = window.getSelection().getRangeAt(0);
  const selectionContents = range.extractContents();
  const element = document.createElement(ele);

  return { element, selectionContents, range };
}

function bold() {
  const { element, selectionContents, range } = createRange('span');

  element.style.fontWeight = 'bold';
  element.appendChild(selectionContents);
  range.insertNode(element);
  saveText();
}
function italic() {
  const { element, selectionContents, range } = createRange('span');

  element.style.fontStyle = 'italic';
  element.appendChild(selectionContents);
  range.insertNode(element);

  saveText();
}

function changeHeader(header) {
  const { element, selectionContents, range } = createRange(header);

  element.appendChild(selectionContents);
  range.insertNode(element);
  saveText();
}

function changeColor(color) {
  const { element, selectionContents, range } = createRange('span');

  element.style.color = color;
  span.appendChild(selectionContents);
  range.insertNode(element);
  saveText();
}

function saveText() {
  localStorage.setItem('userTextData', JSON.stringify(userInput.innerHTML));
}

function clean() {
  userInput.innerHTML = '';
}

function onInit() {
  userInput.innerHTML = userTextData;
}
