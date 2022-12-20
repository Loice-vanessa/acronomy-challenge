import { Router } from "express";
import * as AcronomyControllers from "../Controllers/AcronomyControllers";
import Validator from "../middlewares/validator";
import Datacheker from "../middlewares/datacheker";

const route = Router();


route
  .route("/createPost")
  .post(
      Validator.newAccountRules(),
    Validator.validateInput,
    Datacheker.validateDescriptionlDuplication,
  AcronomyControllers.createAcronomy)
  .get(AcronomyControllers.getAllAcronomy);


route
  .route("/createPost/:id")
  .patch(AcronomyControllers.updateOneAcronomy)
  .get(AcronomyControllers.getOneAcronomy)
  .delete(AcronomyControllers.deleteOneAcronomy);

export default route;