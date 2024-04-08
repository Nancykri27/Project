let cel = document.querySelector("#celsius");
let fah =document.querySelector("#fahrenheit");
let kel =document.querySelector("#kelvin");

function computeTemp(event){
    let curr = +(event.target.value);
    switch (event.target.name) {
        case "celsius":
            kel.value = (curr + 273.32).toFixed(2)
            fah.value = (curr*1.8 + 32).toFixed(2)
            break;
        
        case "fahrenheit":
           cel.value = ((curr-32) /1.8).toFixed(2)
           kel.value = ((curr-32) * 1.8 + 273.32).toFixed(2)
           break; 

        case "kelvin":
            cel.value = (curr - 273.15).toFixed(2)
            fah.value = (((curr - 273.15) * 1.8) + 32).toFixed(2)
            break;      
        default:
            break;
    }

}
// computeTemp()
