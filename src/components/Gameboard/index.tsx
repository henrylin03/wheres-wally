import { Image } from "@mantine/core";
import React, { useState, type RefObject } from "react";
import type { CharacterName, Location, Map } from "../../mockData";
import { Dropdown } from "../Dropdown";
import styles from "./Gameboard.module.css";
interface Props {
  mapImg: Map["imgSrc"];
  characterNames: CharacterName[];
  menuIsVisible: boolean;
  setMenuIsVisible: (menuIsVisible: boolean) => void;
  ref: RefObject<HTMLImageElement | null>;
}

const Gameboard = ({
  mapImg,
  characterNames,
  menuIsVisible,
  setMenuIsVisible,
  ref,
}: Props) => {
  const [selectedPosition, setSelectedPosition] = useState<Location>([0, 0]);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
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
        ref={ref}
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
