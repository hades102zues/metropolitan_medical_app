import express, { RequestHandler } from "express";

const router = express.Router();

interface FormControll {
  getAvailableTimes: RequestHandler;
  postContactForm: RequestHandler;
  postAppForm: RequestHandler;
}

const formControllers: FormControll = require("../controllers/form-controll");

router.post("/get-available-times", formControllers.getAvailableTimes);
router.post("/send-contact-form", formControllers.postContactForm);
router.post("/send-appointment-form", formControllers.postAppForm);

export default router;
