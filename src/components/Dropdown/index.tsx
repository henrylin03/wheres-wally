import { Stack, Text, UnstyledButton } from "@mantine/core";
import { CHARACTERS, type CharacterName, type Location } from "../../mockData";
import { capitaliseFirstLetter } from "../../utils";
import CharacterAvatar from "../CharacterAvatar";
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
      <Text c="dimmed" fz="xs" p="sm">
        Who did you find here?
      </Text>
      <Stack gap={0}>
        {characterNames.map((character) => (
          <UnstyledButton p="sm" className={styles.characterBtn}>
            <CharacterAvatar
              name={character}
              img={CHARACTERS[character]}
              size="md"
            />
            <span>{capitaliseFirstLetter(character)}</span>
          </UnstyledButton>
        ))}
      </Stack>
    </div>
  );
};
