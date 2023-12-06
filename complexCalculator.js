// Filename: complexCalculator.js

// A complex calculator that performs various mathematical operations on complex numbers

// Represents a complex number
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Adds two complex numbers
  add(complexNumber) {
    return new ComplexNumber(
      this.real + complexNumber.real,
      this.imaginary + complexNumber.imaginary
    );
  }

  // Subtracts two complex numbers
  subtract(complexNumber) {
    return new ComplexNumber(
      this.real - complexNumber.real,
      this.imaginary - complexNumber.imaginary
    );
  }

  // Multiplies two complex numbers
  multiply(complexNumber) {
    return new ComplexNumber(
      this.real * complexNumber.real - this.imaginary * complexNumber.imaginary,
      this.real * complexNumber.imaginary + this.imaginary * complexNumber.real
    );
  }

  // Divides two complex numbers
  divide(complexNumber) {
    const divisor = complexNumber.real ** 2 + complexNumber.imaginary ** 2;
    const realPart =
      (this.real * complexNumber.real +
        this.imaginary * complexNumber.imaginary) /
      divisor;
    const imaginaryPart =
      (this.imaginary * complexNumber.real -
        this.real * complexNumber.imaginary) /
      divisor;
    return new ComplexNumber(realPart, imaginaryPart);
  }

  // Calculates the modulus of a complex number
  modulus() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  // Checks if two complex numbers are equal
  equals(complexNumber) {
    return (
      this.real === complexNumber.real &&
      this.imaginary === complexNumber.imaginary
    );
  }

  // Returns a string representation of the complex number
  toString() {
    const sign = this.imaginary < 0 ? "-" : "+";
    return `${this.real} ${sign} ${Math.abs(this.imaginary)}i`;
  }
}

// Example usage:
const complexNumber1 = new ComplexNumber(2, 3);
const complexNumber2 = new ComplexNumber(-1, 5);

// Perform calculations
const sum = complexNumber1.add(complexNumber2);
const difference = complexNumber1.subtract(complexNumber2);
const product = complexNumber1.multiply(complexNumber2);
const quotient = complexNumber1.divide(complexNumber2);
const modulus1 = complexNumber1.modulus();
const modulus2 = complexNumber2.modulus();
const isEquals = complexNumber1.equals(complexNumber2);

console.log(`Sum: ${sum.toString()}`);
console.log(`Difference: ${difference.toString()}`);
console.log(`Product: ${product.toString()}`);
console.log(`Quotient: ${quotient.toString()}`);
console.log(`Modulus of complexNumber1: ${modulus1}`);
console.log(`Modulus of complexNumber2: ${modulus2}`);
console.log(`Are complexNumber1 and complexNumber2 equal: ${isEquals}`);