import { Router } from "express";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";
import { CreateMessageController } from "./src/controllers/CreateMessageController"
import { Get3LastMessagesController} from "./src/controllers/Get3LastMessagesController"
import { ProfileUserController } from "./src/controllers/ProfileUserController";
import { ensureAuthenticated } from "./src/middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last3", new Get3LastMessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };