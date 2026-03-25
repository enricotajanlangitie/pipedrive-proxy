const express = require("express");
const cors    = require("cors");
const fetch   = require("node-fetch");

const app  = express();
const PORT = process.env.PORT || 3000;
const BASE = "https://api.pipedrive.com/v1";

app.use(cors());

// Proxy ANY Pipedrive API path — preserves all query params correctly
app.get("/pipedrive/*", async (req, res) => {
  const token = req.headers["x-pipedrive-token"];
  if (!token) return res.status(401).json({ error: "Missing token" });

  const pipedrivePath = req.path.replace(/^\/pipedrive/, "");
  const params = new URLSearchParams({ api_token: token });
  for (const [k, v] of Object.entries(req.query)) {
    params.set(k, v);
  }

  const url = `${BASE}${pipedrivePath}?${params.toString()}`;
  try {
    const r    = await fetch(url);
    const data = await r.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
