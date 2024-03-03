const express = require("express");

const app = express();
const port = 5000;

app.get("/api/data", (req, res) => {
  return res.json({ data: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Jim Doe" },
  ] });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
