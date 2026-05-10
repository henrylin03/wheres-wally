import { Avatar, Stack, Text, UnstyledButton } from "@mantine/core";
import { CHARACTERS, type CharacterName, type Location } from "../../mockData";
import { capitaliseFirstLetter } from "../../utils";
import styles from "./Dropdown.module.css";

interface Props {
  clickedPosition: Location;
  characterNames: CharacterName[];
}

export const Dropdown = ({ clickedPosition, characterNames }: Props) => {
  const [x, y] = clickedPosition;
  const positionStyling = { left: x, top: y };

  return (
    <div style={positionStyling} className={styles.dropdown}>
      <Text c="dimmed" fz="xs" p="xs">
        Who did you find here?
      </Text>
      <Stack gap={0}>
        {characterNames.map((character) => (
          <UnstyledButton p="sm" className={styles.characterBtn}>
            <Avatar src={CHARACTERS[character]} radius="xl" />
            <span>{capitaliseFirstLetter(character)}</span>
          </UnstyledButton>
        ))}
      </Stack>
    </div>
  );
};
