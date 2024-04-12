// Import your HTML file (assuming it's in the same directory)
const fs = require('fs');
const htmlContent = fs.readFileSync(require.resolve('../index.html'), 'utf8');

// Example test: Check if the <h1> tag exists
test('HTML contains appropriate tags', () => {
  expect(htmlContent).toContain('<h1>');
  expect(htmlContent).toContain('<h3>');
  expect(htmlContent).toContain('<p>');
  expect(htmlContent).toContain('<nav>');
  expect(htmlContent).toContain('<li>');
  expect(htmlContent).toContain('<input>');
});
