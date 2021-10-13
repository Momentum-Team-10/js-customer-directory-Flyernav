const root = document.getElementById("root");
const container = document.createElement("div");
root.appendChild(container);
container.classList.add("uk-container-large", "uk-flex", "uk-flex-between");
console.log(moment())
for (let customer of customers) {
    const customerInfo = document.createElement("div");
    customerInfo.id = `${customer.id.value}`;
    container.appendChild(customerInfo);
    customerInfo.classList.add(
        "uk-card",
        "uk-card-body",
        "uk-card-default",
        "uk-width-medium"
    );

    customerInfo.innerHTML = `
    <p class="uk-card-title" style="color: red !important; padding: 15px">${customer.name.title}</p>
    <img src=${customer.picture.thumbnail} />
    <p><h4>${customer.name.first}</h4></p>
    <p><h4>${customer.name.last}</h4></p>
    <p>${customer.location.street.number}</p>
    <p>${customer.location.street.name}</p>
    <p>${customer.location.city}</p>
    <p>${customer.location.state}</p>
    <p>${customer.location.country}</p>
    <p>${customer.email}</p>
    <p>DOB ${moment(customer.dob.date).format("MMM DD, YYYY")}</p>
    <p>Customer Since ${moment(customer.registered.date).format("MMM DD, YYYY")}</p>
`;



































}
