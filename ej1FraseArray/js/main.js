const arrayFrase = ["No",
"he",
"fracasado, ",
"simplemente",
"me",
"he",
"topado",
"con",
"diez",
"mil",
"soluciones",
"equivocadas"];

let fraseNueva = "";
for (let i=0; i < arrayFrase.length; i++){
    fraseNueva = fraseNueva + arrayFrase[i];
};

let nuevaFrase = arrayFrase.join(' ');
console.log(nuevaFrase);