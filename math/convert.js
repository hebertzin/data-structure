function convertCelsiusToFahrenheit(celsius) {
  const FAHRENHEIT_MULTIPLIER = 1.8;
  const FAHRENHEIT_BASE = 32;

  const fahrenheit = celsius * FAHRENHEIT_MULTIPLIER + FAHRENHEIT_BASE;

  return fahrenheit;
}

convertCelsiusToFahrenheit(30); // output 86;
