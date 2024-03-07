// Replace `if..else` to several ternary operators.

// For readability - write the code in several lines.

// ```js
// let message;

// if (login == 'Pitter') {
//   message = 'Hi';
// } else if (login == 'Owner') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

let message =
  login == "pitter"
    ? "Hi"
    : login == "Owner"
    ? "Hello"
    : login == ""
    ? "unknown"
    : "";
