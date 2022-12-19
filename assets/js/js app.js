var cl = console.log;
cl(countries)

var countryContainer = document.getElementById('countryContainer');
var result = '';
countries.forEach(function (country) {
  result += `
    <div class = "col-lg-3">
      <div class= "card">
        <figure class = "countryCard">
          <img src = "${country.flag}">
          <figcaption>
          <div class="cName">
              <h2>${country.name}</h2>
          </div>
          <div class="country-Data">
              <ul>
                  <li><strong>Capital: </strong>${country.capital}</li>
                  <li><strong>Language: </strong>${country.languages} </li>
                  <li><strong>Population: </strong>${country.population}</li>
              </ul>
          </div>
      </figcaption>
  </figure>
</div>
</div>`;
})
countryContainer.innerHTML = result;