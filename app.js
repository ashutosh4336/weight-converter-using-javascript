document.getElementById("output").style.visibility = "hidden";

document.getElementById("kgInput").addEventListener("input", e => {
  document.getElementById("output").style.visibility = "visible";
  let kg = e.target.value;
  //   console.log(pounds);
  document.getElementById("gramsOutput").innerHTML = kg * 1000 + " " + "Grams";
  document.getElementById("lbsOutput").innerHTML =
    kg * 2.20464 + " " + "Pounds";
  document.getElementById("ozOutput").innerHTML = kg * 35.274 + " " + "Ounce";
});
