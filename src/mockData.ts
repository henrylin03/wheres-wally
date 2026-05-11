const HEADSHOT_PATH_PREFIX = "/images/character-headshots";
export const CHARACTERS = {
  wally: `${HEADSHOT_PATH_PREFIX}/wally.webp`,
  woof: `${HEADSHOT_PATH_PREFIX}/woof.webp`,
  wenda: `${HEADSHOT_PATH_PREFIX}/wenda.webp`,
  wizard: `${HEADSHOT_PATH_PREFIX}/wizard.webp`,
  odlaw: `${HEADSHOT_PATH_PREFIX}/odlaw.webp`,
} as const;

export type CharacterName = keyof typeof CHARACTERS;
export type CharacterAvatarImage = (typeof CHARACTERS)[CharacterName];
export type Location = [number, number];

type CharacterCoordinates = {
  characterName: CharacterName;
  coordinates: Location;
};

export type Map = {
  imgSrc: string;
  locations: CharacterCoordinates[];
};

export const BEACH_MAP: Map = {
  imgSrc: "/images/maps/wheres-wally-beach.webp",
  locations: [
    { characterName: "wally", coordinates: [1, 1] },
    { characterName: "wizard", coordinates: [2, 2] },
    { characterName: "odlaw", coordinates: [3, 3] },
  ],
};
