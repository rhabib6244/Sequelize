async function windowActions() {

  const request = await fetch("/api/dining");
  const data = await request.json();

  console.log(request);
  console.log(data);
  console.table(data);
}

window.onload = windowActions;
