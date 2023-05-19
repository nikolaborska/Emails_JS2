const unreadEmails = (email) => {
    const unreadEmailInbox = document.querySelector("#unread")
    unreadEmailInbox.innerHTML += email
    .map((allEmails) => `
    <div class="email">
    <div class="email__head">
      <button class="email__icon email__icon--closed"></button>
      <div class="email__info">
        <div class="email__sender">${allEmails.sender.name}</div>
        <div class="email__subject">${allEmails.subject}</div>
      </div>
      <div class="email__time">${allEmails.time}</div>
    </div>
    <div class="email__body"></div>
  </div>` )
  .join("")
  }
  
  fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=unread")
  .then(response => response.json())
  .then((data) => unreadEmails(data.emails))
  
  
  const readEmails = (email) => {
    const readEmailsInbox = document.querySelector("#read")
    readEmailsInbox.innerHTML += email
    .map((allEmails) => `
    <div class="email">
    <div class="email__head">
      <button class="email__icon email__icon--opened"></button>
      <div class="email__info">
        <div class="email__sender">${allEmails.sender.name}</div>
        <div class="email__subject">${allEmails.subject}</div>
      </div>
      <div class="email__time">${allEmails.time}</div>
    </div>
    <div class="email__body"></div>
  </div>` )
  .join("")
  }
  
  fetch("https://apps.kodim.cz/daweb/trening-api/apis/emails?folder=read")
  .then(response => response.json())
  .then((data) => readEmails(data.emails))