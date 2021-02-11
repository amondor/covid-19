

const url = 'https://covid19.mathdro.id/api';
const countriesUrl = 'https://api.covid19api.com/countries';
 
async function getGlobalCorona() {
    const response = await fetch(url);
    const data = await response.json();
    //const countries = data.countries.value;
    const recover = data.recovered.value;
    const confirmed = data.confirmed.value;
    const death = data.deaths.value;

    const confirm = numberWithCommas(confirmed);
    const recovered = numberWithCommas(recover);
    const deaths = numberWithCommas(death);


    //console.log(data);

    document.getElementById('confirmed').textContent = confirm;
    document.getElementById('deaths').textContent = deaths;
    //document.getElementById('countries').textContent = countries;
    document.getElementById('recovered').textContent = recovered;
}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function getCountries(){
    const response = await fetch(countriesUrl);
    
    const data = await response.json();
    let countries = new Array;
   
    

    //data.forEach(element => console.log(element));

    //const propertyvalues =Object.entires(data);
    //console.log(propertyvalues);
    data.forEach(element => countries.push(element.Country));
    //data.forEach(element => console.log(element.Country));
    console.log(countries);
    let txt= "";
    for (let i=0;i < countries.length; i++){
        let option = document.createElement('option');
        
        option.innerHTML= countries[i]; 
        
        document.getElementById('countries').append(option);
        console.log(document.getElementById('countries'));

        // let tr = "<option href='#'>";
        // tr += countries[i]+"</option>";
        //document.getElementById('countries').innerHTML += line+ countries[i];
   
    }
  
     //document.getElementById('countries').innerHTML option;

    
}

getGlobalCorona();


getCountries();