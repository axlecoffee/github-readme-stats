import "dotenv/config";
import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import wakatimeCard from "./api/wakatime.js";
import gistCard from "./api/gist.js";
import express from "express";

const app = express();
const router = express.Router();

router.get("/", statsCard);
router.get("/pin", repoCard);
router.get("/top-langs", langCard);
router.get("/wakatime", wakatimeCard);
router.get("/gist", gistCard);

app.use("/api", router);

app.get("/", (req, res) => {
  res.send(
    "GitHub Readme Stats API<br>Currently Running git commit: 45973cf - December 6th, 2025<br>Hosted by and for @axle.coffee on discord<br>https://axle.coffee/<br>I am not affiliated with the parent repo https://github.com/anuraghazra/github-readme-stats<br> give them a star!",
  );
});

const port = process.env.PORT || process.env.port || 9000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
