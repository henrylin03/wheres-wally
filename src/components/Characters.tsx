import { Group, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { CHARACTERS, type CharacterName } from "../mockData";
import { capitaliseFirstLetter } from "../utils";
import CharacterAvatar from "./CharacterAvatar";

interface Props {
  characterNames: CharacterName[];
  charactersFound: CharacterName[];
}

const Characters = ({ characterNames, charactersFound }: Props) => {
  const isNarrowScreen = useMediaQuery("(max-width: 495px)");

  return (
    <Group
      gap={isNarrowScreen ? "md" : "4rem"}
      mx="auto"
      mt="xl"
      justify="center"
    >
      {characterNames.map((name) => (
        <Tooltip key={name} label={capitaliseFirstLetter(name)} withArrow>
          <CharacterAvatar
            name={name}
            img={CHARACTERS[name]}
            size={isNarrowScreen ? "lg" : "xl"}
            isFound={charactersFound.includes(name)}
          />
        </Tooltip>
      ))}
    </Group>
  );
};

export default Characters;
