const { italic, changeHeader, changeColor } = require('./mock-functions');

const textBox = document.createElement('div');

function clean() {
  textBox.innerHTML = '';
}
describe('text editor ', () => {
  beforeEach(() => {
    clean();
  });
  test('Change header', () => {
    const header = changeHeader('h1');
    textBox.appendChild(header);
    console.log(textBox.innerHTML);
    expect(textBox.innerHTML).toBe('<h1>hello</h1>');
  });

  test('change to italic', () => {
    const italicText = italic();
    textBox.appendChild(italicText);
    console.log(textBox.innerHTML);
    expect(textBox.innerHTML).toBe(
      '<span style="font-style: italic;">hello</span>'
    );
  });

  test('change text color', () => {
    const coloredText = changeColor('#f3f3f3');
    textBox.appendChild(coloredText);

    console.log(textBox.innerHTML);
    expect(textBox.innerHTML).toBe(
      '<span style="color: rgb(243, 243, 243);">hello</span>'
    );
  });
});
