function interestRate(years, principle, rate) {
    let a;
    let total;


    total = principle + (principle * (rate * years));
    console.log(total);
}

interestRate(5, 100, 0.05);
interestRate(10, 245, 0.03);
interestRate(40, 115, 0.04);