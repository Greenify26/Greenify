import express from "express";

const router = express.Router();

router.get("/ping", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Utiva Group 6 project",
    data: { version: "" },
  });
});
router.post("/ping", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Utiva Group 6 project",
    data: { version: "" },
  });
});

export default router;
