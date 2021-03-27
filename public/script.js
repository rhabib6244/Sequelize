async function windowActions() {
  const table = document.querySelector(".table-content");
  const request = await fetch("/api/dining");
  const data = await request.json();
  console.log(request);
  console.log(data);

  data["data"].forEach((item) => {
    let counter = 1;
    const html = data["data"].map((dininghall) => {
      return `
          <tr>
            <th><span class='id'>${counter++}</span></th>
            <td><span class='name'>${dininghall.hall_name}</span></td>
            <td><span class='address'>${dininghall.hall_address}</span></td>
          </tr>
          `;
    });
    table.innerHTML = html.join("");
  });
}

window.onload = windowActions;
