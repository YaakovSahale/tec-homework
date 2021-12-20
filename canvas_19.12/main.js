const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// //!..........................1

// ctx.fillRect(50, 50, 100, 100);
// ctx.fillStyle = "black";

// //!..........................2

// ctx.fillStyle = "red";
// ctx.fillRect(300, 300, 70, 70);

// //!..........................3

// ctx.beginPath();
// ctx.fillStyle = "red";
// ctx.arc(200, 250, 30, 0, 2 * Math.PI);
// ctx.fill();

// //!..........................4

// ctx.beginPath();
// ctx.fillStyle = "blue";
// ctx.arc(50, 500, 50, 0, 2 * Math.PI);
// ctx.fill();

// //!..........................5

// ctx.beginPath();
// ctx.fillStyle = "green";
// ctx.arc(100, 350, 40, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(100, 500, 40, 0, 2 * Math.PI);
// ctx.fill();

//!..........................6

// const x = new Array(3).fill(0);

// x.forEach((rac, i) => {
//   x[i] = Math.floor(Math.random() * 300);
// });

// setInterval(() => {
//   ctx.clearRect(x[0], 100, 100, 100);
//   ctx.clearRect(x[1], 300, 100, 100);
//   ctx.clearRect(x[2], 500, 100, 100);

//   x[0] += 20;
//   x[1] += 20;
//   x[2] += 20;

//   ctx.fillRect(x[0], 100, 100, 100);
//   ctx.fillRect(x[1], 300, 100, 100);
//   ctx.fillRect(x[2], 500, 100, 100);
// }, 500);

//!...........................7

// const floor = {
//   x: 0,
//   y: function () {
//     return canvas.height - this.height;
//   },
//   width: canvas.width,
//   height: 100,
// };

// ctx.fillStyle = "pink";
// ctx.fillRect(floor.x, floor.y(), floor.width, floor.height);

// //!............................8

// const player = {
//   x: 0,
//   y: canvas.height - 200,
//   width: 30,
//   height: 100,
// };

// ctx.fillStyle = "red";
// ctx.fillRect(player.x, player.y, player.width, player.height);

// // //!............................9

// const Jump = () => {
//   ctx.clearRect(player.x, player.y, player.width, player.height);
//   ctx.fillStyle = "red";
//   ctx.fillRect((player.x ), player.y, player.width, player.height);

//   addEventListener("keydown", (e) => {
//     ctx.clearRect(player.x, player.y, player.width, player.height);

//     if (e.key == "ArrowUp") {
//       console.log();
//       player.y -= 1;
//       setTimeout(() => {
//         ctx.clearRect(player.x, player.y, player.width, player.height);
//         player.y += 1;
//       }, 200);
//     }
//   });

//   requestAnimationFrame(Jump);
// };

// Jump();

// //!............................10

// const dirX = new Array(10).fill(0);
// const dirY = new Array(10).fill(0);

// dirX.forEach((x, i) => {
//   dirX[i] = Math.floor(Math.random() * 1300);
//   dirY[i] = Math.floor(Math.random() * 800);

//   ctx.fillStyle = "green";
//   ctx.fillRect(dirX[i], dirY[i], 50, 50);
// });

//!...............................11

// const dirXArc = new Array(10).fill(0);
// const dirYArc = new Array(10).fill(0);
// const radius = new Array(10).fill(0);

// radius.forEach((x, i) => {
//   dirXArc[i] = Math.floor(Math.random() * 1000);
//   dirYArc[i] = Math.floor(Math.random() * 500);
//   radius[i] = Math.floor(Math.random() * 80);

//   ctx.beginPath();
//   ctx.fillStyle = "green";
//   ctx.arc(dirXArc[i], dirYArc[i], radius[i], 0, 2 * Math.PI);
//   ctx.fill();
// });

//!...............................12

// const dirX = new Array(10).fill(0);
// const dirY = new Array(10).fill(0);
// const colors = ["green","red","yellow"]

// dirX.forEach((x, i) => {
//   dirX[i] = Math.floor(Math.random() * 1300);
//   dirY[i] = Math.floor(Math.random() * 800);

//   ctx.fillStyle = colors[Math.floor(Math.random()*3)];
//   ctx.fillRect(dirX[i], dirY[i], 50, 50);
// });

//!................................13

ctx.beginPath();
ctx.fillStyle = "green";
ctx.arc(100,75,50,2*Math.PI,1.5*Math.PI);
ctx.fill();
