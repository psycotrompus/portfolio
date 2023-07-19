const express = require('express');
const app = express();
const port = 4000;

console.info(`Loading presentation: ${process.argv[2]}`);
app.use(express.static(process.argv[2]));
app.use('/reveal/plugin', express.static(__dirname + '/node_modules/reveal.js/plugin'));
app.use('/reveal', express.static(__dirname + '/node_modules/reveal.js/dist'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

app.listen(port, () => {
  console.log(`Portfolio running at port ${port}.`);
});
