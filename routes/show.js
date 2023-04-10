const express = require("express");
const File = require("../models/file");
const router = new express.Router();

router.get("/files/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    // Link expired
    if (!file) {
      return res.render("download", { error: "Link has been expired." });
    }
    return res.render("download", {
      uuid: file.uuid,
      fileName: file.filename,
      fileSize: file.size,
      downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
    });
  } catch (err) {
    return res.render("download", { error: "Something went wrong." });
  }
});

module.exports = router;
