import AcronomyModel from "../Models/AcronomyModel";
import handleCRUD from "../Utils/handleCrud";

export const createAcronomy = handleCRUD.createOne(AcronomyModel);
export const getAllAcronomy = handleCRUD.getAll(AcronomyModel);
export const getOneAcronomy= handleCRUD.getOneById(AcronomyModel);
export const updateOneAcronomy = handleCRUD.updateOneById(AcronomyModel);
export const deleteOneAcronomy = handleCRUD.deleteOneById(AcronomyModel);