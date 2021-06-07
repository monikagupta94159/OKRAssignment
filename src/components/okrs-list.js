import OkrCard from "./okr-card";

// We can use Memo here so this component doesn't re-render again unless one of them changes
// Though, it is not required in this scenario
// But would make sense in a big application
const OkrsList = ({ data, category }) => {
  const o = [];
  for (const [key, value] of data) {
    // There are some rows which had an invalid parent
    // To remove such rows, I am filtering the data to check if id is there in the response or not
    if (!value.id) continue;
    if (category === "All" || category === value.category) {
      o.push(<OkrCard key={key} data={value} />);
    }
  }
  return <ul className="okr-list">{o}</ul>;
};
export default OkrsList;
