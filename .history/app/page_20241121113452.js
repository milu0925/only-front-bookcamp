export default function Home() {
  return (
    <div>
      {data.length > 0 ? (
        data.map((book, index) => (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>Price: ${book.price}</p>
            <img src={book.image} alt={book.title} style={{ width: "100px" }} />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
