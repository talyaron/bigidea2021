function interet(cap ,taux ,tps){
    let idx = 0
    while(idx <= tps){
        cap = cap * taux + 1
        idx++
    }
    return cap;
}

console.log(interet(16, 0.16, 16));
console.log(interet(289, 0.016, 4));
console.log(interet(1616, 0.4, 32));
console.log(interet(1000, 0.05, 10));