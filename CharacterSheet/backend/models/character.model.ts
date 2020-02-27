import { model, Schema } from 'mongoose';

export interface CharacterModel {
    playerName: string;
    characterName: string;
    characterLevel: number;
    charaterRace: string;
    characterClass: string;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  }
  
  export const CharacterSchema = new Schema<CharacterModel>({
    currentCount: {
      type: Number
    },
    playerName: {
        type: String
    },
    characterName: {
        type: String
    },
    characterLevel: {
        type: Number
    },
    charaterRace: {
        type: String
    },
    characterClass: {
        type: String
    },
    strength: {
        type: Number
    },
    dexterity: {
        type: Number
    },
    constitution: {
        type: Number
    },
    intelligence: {
        type: Number
    },
    wisdom: {
        type: Number
    },
    charisma: {
        type: Number
    }
  });
  
export const Characters = model('Character', CharacterSchema);