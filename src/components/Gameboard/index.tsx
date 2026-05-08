import { Avatar, Group, Image, Tooltip } from "@mantine/core";
import { CHARACTERS, type Map } from "../../mockData";
import { capitaliseFirstLetter } from "./utils";

interface Props {
  map: Map;
}

const Gameboard = ({ map }: Props) => {
  const { imgSrc, locations } = map;

  return (
    <>
      <Group gap="4rem" mx="auto" mt="xl" justify="center">
        {locations.map((l) => (
          <Tooltip label={capitaliseFirstLetter(l.characterName)} withArrow>
            <Avatar src={CHARACTERS[l.characterName]} radius="xl" size="xl" />
          </Tooltip>
        ))}
      </Group>
      <article>
        <Image src={imgSrc} mx="auto" fit="contain" w="auto" h="80vh" my="lg" />
      </article>
    </>
  );
};

export default Gameboard;
