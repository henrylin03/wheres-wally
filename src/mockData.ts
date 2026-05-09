const HEADSHOT_PATH_PREFIX = "/images/character-headshots";
export const CHARACTERS = {
  wally: `${HEADSHOT_PATH_PREFIX}/wally.webp`,
  woof: `${HEADSHOT_PATH_PREFIX}/woof.webp`,
  wenda: `${HEADSHOT_PATH_PREFIX}/wenda.webp`,
  wizard: `${HEADSHOT_PATH_PREFIX}/wizard.webp`,
  odlaw: `${HEADSHOT_PATH_PREFIX}/odlaw.webp`,
} as const;

export type CharacterName = keyof typeof CHARACTERS;

type CharacterCoordinates = {
  characterName: CharacterName;
  coordinates: string; //? no idea what type this will be yet
};

export type Map = {
  imgSrc: string;
  locations: CharacterCoordinates[];
};

export const BEACH_MAP: Map = {
  imgSrc: "/images/maps/wheres-wally-beach.webp",
  locations: [
    { characterName: "wally", coordinates: "X1, Y1" },
    { characterName: "wizard", coordinates: "X2, Y2" },
    { characterName: "odlaw", coordinates: "X3, Y3" },
  ],
};
