const express = require("express");
const cors    = require("cors");
const fetch   = require("node-fetch");

const app  = express();
const PORT = process.env.PORT || 3000;
const BASE = "https://api.pipedrive.com/v1";

app.use(cors());

app.get("/pipedrive/*", async (req, res) => {
  const token = req.headers["x-pipedrive-token"];
  if (!token) return res.status(401).json({ error: "Missing token" });

  const path   = req.path.replace("/pipedrive", "");
  const query  = new URLSearchParams(req.query).toString();
  const url    = `${BASE}${path}?api_token=${token}${query ? "&" + query : ""}`;

  try {
    const r    = await fetch(url);
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
