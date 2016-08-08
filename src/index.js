require('dotenv').config();

function b(x) {
  return new Promise((resolve) => resolve(x ** 2));
}

async function a(x) {
  const c = await b(x);
  console.log(c);
}

a(process.env.MY_VARIABLE);
