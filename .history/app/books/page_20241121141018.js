import SortBook from "./components/sort_book";
import AllBook from "./components/all_book";
const Books = () => {
  const [books, setBooks] = useState([]);
  const getdata = async (tag) => {
    const data = await axios.get("/api/book");
    let newdata;
    if (tag === "hot") {
      newdata = data.data.sort((a, b) => b.b_sales - a.b_sales);
    } else if (tag === "new") {
      newdata = data.data.sort((a, b) => b.b_date - a.b_date);
    } else if (tag === "upprice") {
      newdata = data.data.sort((a, b) => b.b_price - a.b_price);
    } else if (tag === "downprice") {
      newdata = data.data.sort((a, b) => a.b_price - b.b_price);
    }
    setBooks(newdata);
  };
  useEffect(() => {
    getdata(tag);
  }, [tag]);

  return (
    <div className="l-book">
      <SortBook />
      <AllBook />
    </div>
  );
};

export default Books;
