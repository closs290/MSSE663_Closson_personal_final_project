import * as express from 'express';
import {
    getAllCharacters,
    createCharacter,
    getCharacter,
    updateCharacter,
    deleteCharacter
  } from "../controller/character.controller";
  
  export const characterRoutes = express.Router();
  /**
   * Express routes from character controller.
   *
   * RESTful endpoints make for easiily adding to existing API features.
   */
  
  /**
   * Routes for all tasks. Evaluates to `/characters/`.
   */
  characterRoutes
    .get("/", getAllCharacters)
    .post("/", createCharacter);
  
  /**
   * Routes for a character by id. Evalutes to `/characters/:characterId`.
   */
  characterRoutes.get("/:characterId", getCharacter);
  characterRoutes.post("/:characterId", updateCharacter);
  characterRoutes.delete("/:characterId", deleteCharacter);