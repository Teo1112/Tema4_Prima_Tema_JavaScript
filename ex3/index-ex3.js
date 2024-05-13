function ziuaSaptamanii(nr){
    switch(nr){
        case 1: 
            return "Luni";
        case 2:
            return "Marti";
        case 3:
            return "Miercuri";
        case 4:
            return "Joi";
        case 5:
            return "Vineri";
        case 6:
            return "Sambata";
        case 7:
            return "Duminica";
        default:
            return "Numarul pe care l-ati introdus nu este atribuit unei zile a saptamanii, incercati numere de la 1 la 7";                    
    }
}

console.log(ziuaSaptamanii(2));
console.log(ziuaSaptamanii(7));
console.log(ziuaSaptamanii(9));