//to represent the faship items with the characteristics so it cn be searched, and used to display

interface Props {
    children: string;
    type: string;
    fabric: string;
    closure: boolean;
    date: string;
    pattern: string;

    
  }
  
  const FashionItem = ({ type, fabric, closure, date, pattern }: Props) => {
    return (
      <button className="button"  >
       {type}, {fabric}, {closure}, {date} ,{pattern}
      </button>
    );
  };
  
  export default FashionItem;
  