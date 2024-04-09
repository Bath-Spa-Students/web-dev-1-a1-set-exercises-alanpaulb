function calculate() {
    var Distance = parseFloat(document.getElementById('Distance').value);
    var Consumption = parseFloat(document.getElementById('Consumption').value);
    var Price = parseFloat(document.getElementById('Price').value);

    if (isNaN(Distance) || isNaN(Consumption) || isNaN(Price)) {
        document.getElementById('result').textContent = "Please enter valid numbers.";
        return;
    }

    var cost = (Distance / 100) * Consumption * Price;
    document.getElementById('result').textContent = "Total Cost: AED" + cost.toFixed(2);
}
