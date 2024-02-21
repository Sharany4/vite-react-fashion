//To represent a Fashion button that will show a label for a description

interface Props {
  children: string;
  onClick: () => void;
}

const FashionButton = ({ children, onClick }: Props) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default FashionButton;
