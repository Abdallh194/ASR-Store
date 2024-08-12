import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { SearchItem } = useParams();
  return <div>{SearchItem}</div>;
};

export default SearchResults;
