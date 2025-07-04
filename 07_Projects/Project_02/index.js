const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const h = parseInt(document.querySelector("#height").value);
  const w = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (h === '' || h < 0 || isNaN(h)) {
    result.innerHTML =`Please give a valid height ${h}`;
  }else if(w==='' || w<0 || isNaN(w)){
    result.innerHTML =`Please give a valid weight ${w}`;
  }
  else{
    const bmi = (w /( (h * h)/10000)).toFixed(2);
    //Show the result----->
    result.innerHTML=`<span>You bmi is = ${bmi}</span>`;

  }
  
});
