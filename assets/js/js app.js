var cl =console.log;
var countriesArray=[
    {
        name: "USA",
        population: 331002651,
        area: 9833520,
        capital: "Washington, D.C.",
        language: "English"
    },
    {
        name: "Canada",
        population: 37411047,
        area: 9984670,
        capital: "Ottawa",
        language: "English and French"
    },
    {
        name: "Mexico",
        population: 127575529,
        area: 1964375,
        capital: "Mexico City",
        language: "Spanish"
    },
    {
        name: "France",
        population: 66710000,
        area: 640679,
        capital: "Paris",
        language: "French"
    },
    {
        name: "Germany",
        population: 82790000,
        area: 357114,
        capital: "Berlin",
        language: "German"
    }
]
var result= ' ';
var countyContainer= document.getElementById("countyContainer");
countriesArray.forEach(function(contry, index){
    result += `<tr>
                        <td>${index + 1}</td>
                        <td>${contry.name}</td>
                        <td>${contry.population}</td>
                        <td>${contry.area}</td>
                        <td>${contry.capital}</td>
                        <td>${contry.language}</td>

                </tr>`
})

countyContainer.innerHTML=result;




mobileArray=[
    { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
    { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
    { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
    { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
    { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
  ]

  var result='';
  var mobilesContainer= document.getElementById("mobilesContainer");
  mobileArray.forEach(function(mobile, index){
    result += `<tr>
                    <td>${index + 1}</td>
                    <td>${mobile.name}</td>
                    <td>${mobile.price}</td>
                    <td>${mobile.color}</td>
                    <td>${mobile.storage}</td>
                    <td>${mobile.camera}</td>
            </tr>`
  })

  mobilesContainer.innerHTML= result;