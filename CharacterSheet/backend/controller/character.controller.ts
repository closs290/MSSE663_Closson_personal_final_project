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
    const newCharacter = new Characters({
      name: req.body.name
    });
    newCharacter.save(defaultCallback(req, res));
  };
  
  export const updateCharacter = (req: any, res: any) => {
    Characters.findOneAndUpdate(
      { _id: req.params.taskId },
      req.body,
      { new: true },
      defaultCallback(req, res)
    );
  };
  
  export const deleteCharacter = (req: any, res: any) => {
    Characters.deleteOne(
      { _id: req.params.taskId }
      //, defaultCallback(req, res)
    );
  };