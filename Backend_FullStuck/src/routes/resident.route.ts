import { Hono } from "hono";
import { residentController } from "../controllers/resident.controller.ts";

const residentRouter = new Hono();

residentRouter.get('/card', residentController.ResidentCard);
residentRouter.get("/", residentController.getAllResidents);
residentRouter.post("/", residentController.createResident);
residentRouter.get("/:id", residentController.getResidentById);
residentRouter.patch("/:id", residentController.updateResident);
residentRouter.delete("/:id", residentController.deleteResident);

export default residentRouter ;