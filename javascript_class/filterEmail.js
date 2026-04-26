const emails = [
  "isuwa@gmail.com",
  "tasiemail.com",
  "",
  "test@yahoo.com",
  "ahmedhub.com",
  "dev@hub.com"
];

// Filter only valid emails
const validEmails = emails.filter(email => email.includes("@"));

// Function to send message
function sendWelcome(email) {
  console.log(`Welcome email sent to: ${email}`);
}

// Send one by one every 1 second
validEmails.forEach((email, index) => {
  setTimeout(() => {
    sendWelcome(email);
  }, (index + 1) * 1000); // starts after 1 sec, then 2 sec, 3 sec...
});