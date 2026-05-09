import { Avatar, Group, Tooltip } from "@mantine/core";
import { CHARACTERS, type CharacterName } from "../mockData";
import { capitaliseFirstLetter } from "../utils";

interface Props {
  characterNames: CharacterName[];
}

const Characters = ({ characterNames }: Props) => {
  return (
    <Group gap="4rem" mx="auto" mt="xl" justify="center">
      {characterNames.map((name) => (
        <Tooltip key={name} label={capitaliseFirstLetter(name)} withArrow>
          <Avatar src={CHARACTERS[name]} radius="xl" size="xl" />
        </Tooltip>
      ))}
    </Group>
  );
};

export default Characters;
