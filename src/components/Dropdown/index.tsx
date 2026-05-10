import { Stack, UnstyledButton } from "@mantine/core";
import type { CharacterName, Location } from "../../mockData";
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
      <Stack gap={0}>
        {characterNames.map((character) => (
          <UnstyledButton ta="left" p="sm">
            {capitaliseFirstLetter(character)}
          </UnstyledButton>
        ))}
      </Stack>
    </div>
  );
};
