const renderContact = () => {
  const main = document.getElementById("main");
  const contact = document.createElement("div");
  contact.className = "contact";

  const title = document.createElement("h1");
  title.textContent = "Contact us";

  const timeDiv = document.createElement("div");
  timeDiv.className = "contactDiv";
  const time = document.createElement("p");
  time.id = "time";
  time.textContent = "Everyday at everytime, 24/7";
  const timeImg = document.createElement("img");
  timeImg.src = "./images/icons/wall-clock.png";

  const locationDiv = document.createElement("div");
  locationDiv.className = "contactDiv";
  const location = document.createElement("p");
  location.id = "location";
  location.textContent = "000 Anywhere Avenue, Somewhere, IDK 11111";
  const locationImg = document.createElement("img");
  locationImg.src = "./images/icons/placeholder.png";

  const phoneDiv = document.createElement("div");
  phoneDiv.className = "contactDiv";
  const phone = document.createElement("p");
  phone.id = "phone";
  phone.textContent = "+0 111-000-1111 ";
  const phoneImg = document.createElement("img");
  phoneImg.src = "./images/icons/telephone.png";

  const mailDiv = document.createElement("div");
  mailDiv.className = "contactDiv";
  const mail = document.createElement("p");
  mail.textContent = "Message us";
  mail.id = "mail";
  const mailImg = document.createElement("img");
  mailImg.id = "mailImg";
  mailImg.src = "./images/icons/mail.png";

  const mailForm = document.createElement("form");
  mailForm.id = "mailForm";
  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.textContent = "Full Name";
  const nameInput = document.createElement("input");
  nameInput.id = "name";
  nameInput.type = "text";
  nameInput.placeholder = "Type your full name here";
  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.textContent = "Email";
  const emailInput = document.createElement("input");
  emailInput.id = "email";
  emailInput.type = "email";
  emailInput.placeholder = "Type your email here";
  const messageLabel = document.createElement("label");
  messageLabel.htmlFor = "message";
  messageLabel.textContent = "Message";
  const messageInput = document.createElement("textarea");
  messageInput.id = "message";
  messageInput.placeholder = "Type your message here";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.id = "submitBtn";
  submitBtn.textContent = "Submit";

  submitBtn.addEventListener("click", () => {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  });

  main.appendChild(contact);
  contact.appendChild(title);

  contact.appendChild(timeDiv);
  timeDiv.appendChild(time);
  timeDiv.appendChild(timeImg);

  contact.appendChild(locationDiv);
  locationDiv.appendChild(location);
  locationDiv.appendChild(locationImg);

  contact.appendChild(phoneDiv);
  phoneDiv.appendChild(phone);
  phoneDiv.appendChild(phoneImg);

  contact.appendChild(mailImg);
  contact.appendChild(mail);
  contact.appendChild(mailForm);

  mailForm.appendChild(nameLabel);
  nameLabel.appendChild(nameInput);

  mailForm.appendChild(emailLabel);
  emailLabel.appendChild(emailInput);

  mailForm.appendChild(messageLabel);
  messageLabel.appendChild(messageInput);

  contact.appendChild(submitBtn);
};

export { renderContact };
