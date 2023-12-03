import express from "express";
const router = express.Router();

/* router.get("/", (req, res) => {
  // router code here
}); */

router
  .route("/info")
  .get((req, res) => {
    res.json({ address: "en la casa de tu hermana" });
  })
  .post((req, res) => {
    res.json({ msg: "enviando solicitud POST" });
  });
// prettier-ignore
router.route("/formulario")
  .get((req, res) => {
  res.json({ micasa: "tu prima conoce" });
  });
router.route("/nosotros").get((req, res) => {
  res.json({ nosotros: "una empresa genial" });
});

export default router;
