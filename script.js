mast = ['clubs', 'spades', 'diamonds', 'hearts'];
numen = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'tuz'];
TRs = []
l = 0;
n = 0;
while (n < numen.length) {
    TDs = [];
    for (j = 0; j < mast.length; j++) {

        if (numen[n] === 'tuz') {
            TDs.push(
                `<td class="card card--person">
          <img class="left" src="images/${mast[j]}.svg">
             <img class="person" src="images/${mast[j]}.svg">
          
        <img  class="right" src="images/${mast[j]}.svg">
                  </td>`
            );
        } else if (numen[n] === 'jack' || numen[n] === 'queen' || numen[n] === 'king') {
            TDs.push(
                `<td class="card card--person">
             <img class="left" src="images/${mast[j]}.svg">
               <img class="person" src="images/${numen[n]}.svg">
        <img class="right"src="images/${mast[j]}.svg">
                  </td>`
            );
        } else {
            TDs.push(
                `<td class="card">
           
           
             <img  class="left" src="images/${mast[j]}.svg">
            <p style="padding: 0 0" >${numen[n]}</p>
           
            <img class="right"src="images/${mast[j]}.svg">
                  </td>`
            );
        }
    }
    for (l = 0; l < mast.length; l++) {
        if (numen[n + 1] !== undefined) {

            if (numen[n + 1] === 'jack' || numen[n + 1] === 'queen' || numen[n + 1] === 'king') {
                TDs.push(
                    `<td class="card card--person">
             <img  class="left"src="images/${mast[l]}.svg">
               <img class="person" src="images/${numen[n + 1]}.svg">
        <img class="right"src="images/${mast[l]}.svg">
                  </td>`
                );
            } else {
                TDs.push(
                    `<td class="card">
             <img class="left" src="images/${mast[l]}.svg">
            <p>${numen[n + 1]}</p>
        <img class="right" src="images/${mast[l]}.svg">
                  </td>`
                );


            }
        }
    }
    TRs.push(`<tr class="card__info">${TDs.join(" ")}</tr>`);
    n = n + 2;
}
document.write(`<table class="wrapper">${TRs.join(" ")}</table>`)
