function interestRate(years, principle, rate) {
    let total = principle + (principle * (rate * years));
    console.log(total);
}

//rate must be written as a decimal
interestRate(5, 100, 0.05);
interestRate(10, 245, 0.03);
interestRate(40, 115, 0.04);