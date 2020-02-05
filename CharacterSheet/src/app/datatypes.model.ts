export interface character {
    PlayerName: string; // TODO: Associate with account
    CharacterName: string;
    CharacterRace: Race;
    Speed: number; // usually divisible by 5, between 15 and 50
    CharacterLevel: number; // TODO: Limit to int, 1 to 20
    CharacterClass: DNDClasses;
    // TODO: MulticlassArray: ClassInfo[];
    CharacterBackground: string; // Todo: enumerate
    Alignment: AlignmentType;
    TotalHitPoints: number;
    CurrentHitPoints: number;
    TemporaryHitPoints: number;
    HitDice: number[];  // TODO: Limit to two numbers; 
                        // 1-20 for first number
                        // 4, 6, 8, 10 or 12 for second
    ArmorClass: number;
    Stats: number[]; // TODO: Associate with each stat; limit to 6
    StatBonuses: number[];
    ProficiencyBonus: number;
    GP: number;
    Inspiration: boolean;
}

// export class ClassInfo {
//     DNDClass: DNDClasses;
//     LevelsInThisClass: number; // TODO: Limit to int, 1 to 20
//     Subclass: string;
// }

export enum AlignmentType {
    LawfulGood,
    NeutralGood,
    ChaoticGood,
    TrueNeutral,
    LawfulEvil,
    NeutralEvil,
    ChaoticEvil
}

export enum DNDStatEnum {
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
}

export enum DNDStatString {
    'str' = 'Strength',
    'dex' = 'Dexterity',
    'con' = 'Constitution',
    'int' = 'Intelligence',
    'wis' = 'Wisdom',
    'cha' = 'Charisma'
}

export enum dieType {
    'd4',
    'd6',
    'd8',
    'd10',
    'd12',
    'd20',
    'd100'
}

export enum Race {
    Aarakocra,
    Aasimar,
    Dragonborn,
    Dwarf,
    Elf,
    Firbolg,
    Genasi,
    Gnome,
    HalfElf,
    Halfling,
    Human,
    Kalashtar,
    Kobold,
    Minotaur,
    Strig,
    Tiefling,
    Tabaxi,
    Triton,
    YuanTiPureblood
}

export enum DNDClasses {
    Barbarian,
    Bard,
    Cleric,
    Druid,
    Fighter,
    Monk,
    Paladin,
    Ranger,
    Rogue,
    Sorcerer,
    Warlock,
    Wizard,
}

export enum Proficiencies {
    Athletics,
    Acrobatics,
    SleightOfHand,
    Stealth,
    Arcana,
    History,
    Investigation,
    Nature,
    Religion,
    AnimalHandling,
    Insight,
    Medicine,
    Perception,
    Survival,
    Deception,
    Intimidation,
    Performance,
    Persuasion,
    TheivesTools,
    Instrument
}

export enum Language {
    Common,
    Elvish,
    Dwarvish,
    Draconic,
    Auran,
    Aquan,
    Ignan,
    Terran,
    Infernal,
    Abyssal,
    Celestial,
    Sylvan
}

// TODO: Personality Traits, Ideals, Bonds, Flaws as strings
// Future TODO: Enums for each of the above

// Todo: Class options, subclasses, invocations, Bardic Inspiration, etc.

// Todo: Weapon proficiencies

// TODO: Weapon options