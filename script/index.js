function calculateArea() {
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numbers for base and height.");
        return;
    }
    let area = 0.5 * base * height;
    document.getElementById('result').innerHTML = "The area of the triangle is: " + area.toFixed(2);
}