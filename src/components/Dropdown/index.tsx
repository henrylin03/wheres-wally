import { Stack, UnstyledButton } from "@mantine/core";
import type { CharacterName } from "../../mockData";
import { capitaliseFirstLetter } from "../../utils";
import styles from "./Dropdown.module.css";

export type Location = [number, number];
interface Props {
  clickedPosition: Location;
  characterNames: CharacterName[];
}

export const Dropdown = ({ clickedPosition, characterNames }: Props) => {
  const [x, y] = clickedPosition;
  const positionStyling = { left: x, top: y };

  return (
    <div style={positionStyling} className={styles.dropdown}>
      <Stack gap="lg">
        {characterNames.map((character) => (
          <UnstyledButton>{capitaliseFirstLetter(character)}</UnstyledButton>
        ))}
      </Stack>
    </div>
  );
};
