import { Characters } from "../models/character.model";

export const defaultCallback = (req: any, res: any) => (
    err: any,
    data: any
  ) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  };

  export const optsCallback = (req: any, res: any) => (options: {msg?: string}) => (
    err: any
  ) => {
    if (err) {
      res.send(err);
    }
    res.json(options);
  };

  export const getAllCharacters = (req: any, res: any) => {
    console.log("Loading characters");
    Characters.find({}, defaultCallback(req, res));
  };
  
  export const getCharacter = (req: any, res: any) => {
    console.log("Looking for character " + req.params.characterId);
    Characters.findById(req.params.characterId, defaultCallback(req, res));
  };
  
  export const createCharacter = (req: any, res: any) => {
    console.log("Creating " + req.body.characterName + " for " + req.body.playerName);
    const charToCreate = {
      playerName: req.body.playerName,
      characterName: req.body.characterName,
      characterLevel: req.body.characterLevel,
      characterRace: req.body.characterRace,
      characterClass: req.body.characterClass,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma
    }
    
    const newCharacter = new Characters(charToCreate);
    newCharacter.save(defaultCallback(req, res));
  };
  
  export const updateCharacter = (req: any, res: any) => {
    
    const charToUpdate = {
      playerName: req.body.playerName,
      characterName: req.body.characterName,
      characterLevel: req.body.characterLevel,
      characterRace: req.body.characterRace,
      characterClass: req.body.characterClass,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma
    }
    
    Characters.findOneAndUpdate(
      { _id: req.params.characterId },
      charToUpdate,
      defaultCallback(req, res)
    );
  };
  
  export const deleteCharacter = (req: any, res: any) => {
    console.log("Trying to delete: " + req.params.characterId);
    Characters.deleteOne(
      {_id: req.params.characterId},
      optsCallback(req, res)({msg: "Deleted successfully"})
    );
  };