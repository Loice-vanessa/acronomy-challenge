import {Router} from "express";

import AcronomyRoute from "../routes/AcronomyRoute"

const Acronomy=Router()

Acronomy.use("/acronomy",AcronomyRoute)

export default Acronomy;




