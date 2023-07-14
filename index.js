const express = require('express');
const app = express();
const port = 3000;

console.info(`Loading presentation: ${process.argv[2]}`);
app.use(express.static(process.argv[2]));

app.listen(port, () => {
  console.log(`Portfolio running at port ${port}.`);
});
