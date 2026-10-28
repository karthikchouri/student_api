const express = require("express");
const app = express();

app.get("/", (req, res) => {
res.json([
        { id: 1, name: "Karthik", department: "HR" },
        { id: 2, name: "John", department: "IT" }
    ]);
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
