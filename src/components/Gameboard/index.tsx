import { Image } from "@mantine/core";
import { useState } from "react";
import { type CharacterName, type Map } from "../../mockData";
import { Dropdown, type Location } from "../Dropdown";
import styles from "./Gameboard.module.css";
interface Props {
  mapImg: Map["imgSrc"];
  characterNames: CharacterName[];
}

const Gameboard = ({ mapImg, characterNames }: Props) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState<Location>([0, 0]);

  const handleClick = (e) => {
    setMenuIsVisible(true);
    setSelectedPosition([e.pageX, e.pageY]);
    console.log("selectedPosition:", selectedPosition);
  };

  return (
    <section>
      <Image
        src={mapImg}
        mx="auto"
        fit="contain"
        w="auto"
        h="80vh"
        my="lg"
        className={styles.img}
        onClick={handleClick}
      />
      {menuIsVisible && (
        <Dropdown
          clickedPosition={selectedPosition}
          characterNames={characterNames}
        />
      )}
    </section>
  );
};
export default Gameboard;
