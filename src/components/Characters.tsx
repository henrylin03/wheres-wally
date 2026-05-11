import { Group, Tooltip } from "@mantine/core";
import { CHARACTERS, type CharacterName } from "../mockData";
import { capitaliseFirstLetter } from "../utils";
import CharacterAvatar from "./CharacterAvatar";

interface Props {
  characterNames: CharacterName[];
}

const Characters = ({ characterNames }: Props) => (
  <Group gap="4rem" mx="auto" mt="xl" justify="center">
    {characterNames.map((name) => (
      <Tooltip key={name} label={capitaliseFirstLetter(name)} withArrow>
        <CharacterAvatar name={name} img={CHARACTERS[name]} size="xl" />
      </Tooltip>
    ))}
  </Group>
);

export default Characters;
