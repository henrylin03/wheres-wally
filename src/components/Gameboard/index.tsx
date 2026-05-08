interface Props {
  imgSrc: string;
}

const Gameboard = ({ imgSrc }: Props) => (
  <>
    <img src={imgSrc} />
  </>
);

export default Gameboard;
