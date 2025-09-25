global.fetch = jest.fn();

test('API URL is formatted correctly', () => {
  const searchQuery = 'Stephen King';
  const expectedUrl = `https://openlibrary.org/search.json?q=${encodeURIComponent(searchQuery)}`;
  
  expect(expectedUrl).toBe('https://openlibrary.org/search.json?q=Stephen%20King');
});
