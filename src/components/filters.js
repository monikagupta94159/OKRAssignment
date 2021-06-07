// Only One filter is there in the application
// Selectbox which triggers onFilterSelect
export default ({ data, onFilterSelect }) => {
  return (
    <div className="filters">
      <label>Filter by category:</label>
      <select onChange={onFilterSelect}>
        <option>All</option>
        {data.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </div>
  );
};
