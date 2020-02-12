interface Character {
    ClassName: DNDClasses;
    Spellcaster: boolean;
    SavingThrows: DNDStat[];
    HitPoints: number;
    Strength: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
    RollStats(): number[];
    IncreaseHPTotal(): void;
    FullRest(): void;
    ShortRest(NumberOfHitDice: number);
    Heal(healAmount: number): void;
    TakeDamage(damage: number): void;
}

class DNDClass implements dndclass{
    ClassName: DNDClasses;
    Spellcaster: boolean;
    SavingThrows: DNDStat[];
    Multiclass?: boolean;
    constructor(thisClass: DNDClasses, multiclass?: boolean) {
        this.ClassName = thisClass;
        switch (this.ClassName) {
            case DNDClasses.Fighter:
                this.Spellcaster = false;
                this.SavingThrows = multiclass ? []: [DNDStat.Strength, DNDStat.Constitution];
                break;
            case DNDClasses.Wizard:
                this.Spellcaster = true;
                this.SavingThrows = multiclass ? []: [DNDStat.Intelligence, DNDStat.Wisdom];
                break;
            case DNDClasses.Warlock:
                this.Spellcaster = true;
                this.SavingThrows = multiclass ? []: [DNDStat.Wisdom, DNDStat.Charisma];
                break;
            case DNDClasses.Sorcerer:
                this.Spellcaster = true;
                this.SavingThrows = multiclass ? []: [DNDStat.Charisma, DNDStat.Constitution];
                break;
            case DNDClasses.Rogue:
                this.Spellcaster = false;
                this.SavingThrows = multiclass ? []: [DNDStat.Dexterity, DNDStat.Intelligence];
                break;
            case DNDClasses.Bard:
                this.SavingThrows = multiclass ? []: [DNDStat.Dexterity, DNDStat.Charisma];
                this.Spellcaster = true;
                break;
            default:
                this.SavingThrows = [];
                this.Spellcaster = false;
        }
    }
}

interface dndclass {
    ClassName: DNDClasses;
    Spellcaster: boolean;
    SavingThrows: DNDStat[]; // Todo: Limit to two
    
}

interface dndrace {
    AbilityScoreIncrease: ASI[],
    Languages: Language[],
    Darkvision: boolean,
    OtherContent: String // TODO: There are usually specific types of traits available
}

interface ASI {
    StatThatIncreases: DNDStat,
    AmountOfIncrease: number
}

enum DNDStat {
    Strength,
    Dexterity,
    Constitution,
    Intelligence,
    Wisdom,
    Charisma
}

enum DNDRace {
    Human,
    Elf,
    Dwarf,
    Aasimar,
    Aaracokra,
    Tiefling,
    Halfling,
    HalfElf,
    Tabaxi
}

enum DNDClasses {
    Fighter,
    Cleric,
    Wizard,
    Warlock,
    Sorcerer,
    Rogue,
    Bard
}

enum Language {
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
