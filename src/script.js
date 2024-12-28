// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    const result = document.getElementById('result');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get input values
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);

        // Calculate the sum
        const sum = num1 + num2;

        // Display the result
        result.textContent = `The sum is: ${sum}`;
    });
});
