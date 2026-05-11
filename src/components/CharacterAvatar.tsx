import { Avatar, Indicator } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import type { CharacterAvatarImage, CharacterName } from "../mockData";

const SIZE_MAP = {
  md: {
    size: 16,
    iconSize: 6,
    iconStrokeWidth: 6,
  },
  lg: {
    size: 20,
    iconSize: 10,
    iconStrokeWidth: 6,
  },
  xl: {
    size: 24,
    iconSize: 12,
    iconStrokeWidth: 6,
  },
} as const;

type SupportedSizes = keyof typeof SIZE_MAP;
interface Props {
  name: CharacterName;
  img: CharacterAvatarImage;
  isFound?: boolean;
  size?: SupportedSizes;
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
      size={SIZE_MAP[size].size}
      label={
        <IconCheck
          size={SIZE_MAP[size].iconSize}
          strokeWidth={SIZE_MAP[size].iconStrokeWidth}
        />
      }
    >
      {avatar}
    </Indicator>
  );
};

export default CharacterAvatar;
