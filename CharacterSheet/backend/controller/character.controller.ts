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

  export const getAllCharacters = (req: any, res: any) => {
    Characters.find({}, defaultCallback(req, res));
  };
  
  export const getCharacter = (req: any, res: any) => {
    Characters.findById(req.params.taskId, defaultCallback(req, res));
  };
  
  export const createCharacter = (req: any, res: any) => {
    const charToCreate = {
      playerName: req.body.playerName,
      characterName: req.body.characterName,
      characterLevel: req.body.characterLevel,
      charaterRace: req.body.charaterRace,
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
      charaterRace: req.body.charaterRace,
      characterClass: req.body.characterClass,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma
    }
    
    Characters.findOneAndUpdate(
      { _id: req.params.taskId },
      charToUpdate,
      defaultCallback(req, res)
    );
  };
  
  export const deleteCharacter = (req: any, res: any) => {
    Characters.deleteOne(
      { _id: req.params.taskId }
      //, defaultCallback(req, res)
    );
  };