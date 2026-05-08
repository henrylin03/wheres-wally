import { Image } from "@mantine/core";

interface Props {
  imgSrc: string;
}

const Gameboard = ({ imgSrc }: Props) => (
  <>
    <Image src={imgSrc} mx="auto" fit="contain" w="auto" h="80vh" mt="xl" />
  </>
);

export default Gameboard;
