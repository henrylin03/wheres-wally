import { Avatar, Indicator, type MantineSize } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import type { CharacterAvatarImage, CharacterName } from "../mockData";

interface Props {
  name: CharacterName;
  img: CharacterAvatarImage;
  isFound?: boolean;
  size?: MantineSize;
}

const CharacterAvatar = ({
  name,
  img,
  isFound = false,
  size = "md",
}: Props) => {
  const avatar = (
    <Avatar
      src={img}
      radius="xl"
      size={size}
      aria-label={name}
      opacity={isFound ? 0.5 : 1}
    />
  );

  if (!isFound) return avatar;

  return (
    <Indicator
      inline
      color="green"
      size={24}
      label={<IconCheck size={12} strokeWidth={6} />}
    >
      {avatar}
    </Indicator>
  );
};

export default CharacterAvatar;
