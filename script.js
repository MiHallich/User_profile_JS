console.log("start");

const DOMAIN = "https://random-data-api.com/";



function showData(data) {
    const wrapper = document.getElementById("user_info_holder");

    const user_name = document.createElement("div");
    user_name.classList.add("user_name_holder");
    user_name.textContent = `${data.first_name} ${data.last_name}`;

    const user_avatar = document.createElement("img");
    user_avatar.classList.add("user_avatar_holder");
    user_avatar.src = data.avatar;

    const user_username = document.createElement("div");
    user_username.classList.add("user_username_holder");
    user_username.textContent = `@${data.username}`;

    const user_email = document.createElement("div");
    user_email.classList.add("user_email_holder");
    user_email.textContent = `Email: ${data.email}`;

    const user_contacts = document.createElement("div");
    user_contacts.classList.add("user_contacts_holder");

    const user_contacts_title = document.createElement("p");
    user_contacts_title.classList.add("user_contacts_title_holder");
    user_contacts_title.textContent = `Contacts`;

    const user_phone_number = document.createElement("div");
    user_phone_number.classList.add("user_phone_number_holder");
    user_phone_number.textContent = `Phone number: ${data.phone_number}`;

    const user_address = document.createElement("div");
    user_address.classList.add("user_address_holder");

    const user_address_title = document.createElement("p");
    user_address_title.classList.add("user_address_title_holder");
    user_address_title.textContent = `Address`;

    const user_city = document.createElement("div");
    user_city.classList.add("user_city_holder");
    user_city.textContent = `City: ${data.address.city}`;

    const user_country = document.createElement("div");
    user_country.classList.add("user_country_holder");
    user_country.textContent = `Country: ${data.address.country}`;

    const user_state = document.createElement("div");
    user_state.classList.add("user_state_holder");
    user_state.textContent = `State: ${data.address.state}`;


    wrapper.append(user_name);
    wrapper.append(user_avatar);
    wrapper.append(user_username);
    user_contacts.append(user_contacts_title);
    user_contacts.append(user_email);
    user_contacts.append(user_phone_number);
    wrapper.append(user_contacts);
    user_address.append(user_address_title);
    user_address.append(user_country);
    user_address.append(user_state);
    user_address.append(user_city);
    wrapper.append(user_address);
    console.log(data);
}

async function getData(url) {
  const response = await fetch(DOMAIN + url);
  const json = await response.json();
  showData(json);
}

getData("api/users/random_user");
