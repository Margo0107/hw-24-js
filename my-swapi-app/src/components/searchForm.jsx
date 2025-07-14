export default function SearchFrom() {
  return (
    <div className="md-3">
      <input
        type="text"
        className="from-control mb2"
        placeholder="https://www.swapi.tech/api/people/1/"
      />
      <button className="btn btn-primary">Get info</button>
    </div>
  );
}
