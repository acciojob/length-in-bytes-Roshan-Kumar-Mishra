function byteSize(str) {
  // Create a TextEncoder instance
  const encoder = new TextEncoder();

  // Encode the string to UTF-8 and get the byte length
  const encoded = encoder.encode(str);
  const byteLength = encoded.length;

  return byteLength;
}

// Example usage:
// const inputString = "Hello, 你好";
// const sizeInBytes = byteSize(inputString);
// console.log(`The size of the string in bytes is: ${sizeInBytes}`);

