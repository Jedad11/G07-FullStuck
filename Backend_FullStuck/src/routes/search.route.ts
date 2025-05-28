import { Hono } from "hono";
import { residentController} from "../controllers/search.controller.ts"

const searchRouter = new Hono()

searchRouter.get("/",residentController.searchByName)

export default searchRouter