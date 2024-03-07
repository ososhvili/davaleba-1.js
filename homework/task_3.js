// Replace `switch` to operator `if..else`:

// ```js
// switch (val) {
//   case 'a':
//     console.log( 'a' );
//     break;

//   case 'b':
//   case 'c':
//   case 'd':
//   case 'e':
//     console.log( 'others' );
//     break;

//   default:
//     console.log( 'unknown' );
// }

if (val) {
  console.log("a");
} else if ("b") {
  console.log("others");
} else if ("c") {
  console.log("others");
} else if ("d") {
  console.log("others");
} else if ("e") {
  console.log("others");
} else {
  console.log("unknown");
}
