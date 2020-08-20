import express, { RequestHandler } from "express";
import { body } from "express-validator";

const router = express.Router();

interface FormControll {
  getAvailableTimes: RequestHandler;
  postContactForm: RequestHandler;
  postAppForm: RequestHandler;
}

const formControllers: FormControll = require("../controllers/form-controll");

router.post(
  "/get-available-times",
  [body("date").isLength({ min: 10 })],
  formControllers.getAvailableTimes
);
router.post("/send-contact-form", formControllers.postContactForm);
router.post(
  "/send-appointment-form",
  [
    body("fullName").isLength({ min: 3 }),
    body("phoneNumber").isLength({ min: 7 }),
    body("date").isLength({ min: 10 }),
    body("service").isLength({ min: 3 }),
    body("time").isLength({ min: 4 }),
  ],
  formControllers.postAppForm
);

export default router;
