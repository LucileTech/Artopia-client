function add(a, b) {
  return a + b;
}

describe('add function', () => {
  // Test case 1
  test('adds 1 + 2 to equal 3', () => {
    // Arrange
    const result = add(1, 2);
    // Assert
    expect(result).toBe(3); // Check if the result of add(1, 2) is equal to 3
  });

  // Test case 2
  test('adds -1 + 1 to equal 0', () => {
    // Arrange
    const result = add(-1, 1);
    // Assert
    expect(result).toBe(0); // Check if the result of add(-1, 1) is equal to 0
  });

  // Additional test cases can be added here...
});