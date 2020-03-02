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
   * Express routes fro Tasks.
   *
   * RESTful endpoints make for easiily adding to existing API features.
   */
  
  /**
   * Routes for all tasks. Evaluates to `/characters/`.
   */
  characterRoutes.get("/", getAllCharacters).post("/", createCharacter);
  
  /**
   * Routes for a task by id. Evalutes to `/characters/:characterId`.
   */
  characterRoutes
    .get("/:characterId", getCharacter)
    .post("/:characterId", updateCharacter)
    .delete("/:characterId", deleteCharacter);