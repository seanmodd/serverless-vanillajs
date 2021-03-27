// domain/.netlify/functions/1-hello
// exportsddd
// const person = { name: 'john' }

exports.handler = async (event, context, cb) => ({
  statusCode: 200,
  body: 'Our First Netlify Function Example!!!!!!!!',
});
