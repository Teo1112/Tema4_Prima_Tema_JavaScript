//Scrieți o funcție numită tellFortune care: primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
//afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."

function tellFortune(N, Z, Y, X) {
    return `Vei fi un ${X} în ${Y}, căsătorit cu ${Z} și vei avea ${N} copii.`;
}

// Testăm funcția cu exemplul dat
console.log(tellFortune(3, "Emanuel", "Italia", "Programator"));
