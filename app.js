

function main() {
    let valor = "1";
    switch (valor) {
        case 1:
            console.log("Pedir turno");
            break;
        case 2:
            console.log("Salir");
            break;
        case 3:
            console.log("Otra cosa");
            break;
        default:
            console.log("CASO POR DEFECTO");
    }

    /*  if (valor === "A") {
         console.log("Pedir turno");
     }else if(valor === "B"){
         console.log("Salir");
     }else if(valor === "C"){
         console.log("Otra cosa");
     }else if(valor === "D"){
         console.log("Otra cosa 2");
     } */
}

main();