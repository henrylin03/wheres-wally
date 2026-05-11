import { Avatar, type MantineSize } from "@mantine/core";
import type { CharacterAvatarImage, CharacterName } from "../mockData";

interface Props {
  name: CharacterName;
  img: CharacterAvatarImage;
  size?: MantineSize;
}

const CharacterAvatar = ({ name, img, size = "md" }: Props) => (
  <Avatar src={img} radius="xl" size={size} aria-label={name} />
);

export default CharacterAvatar;
