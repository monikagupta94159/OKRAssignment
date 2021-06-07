import { useState } from "react";

const OkrCard = ({ data }) => {
  const { parent_objective_id, title, children } = data;
  // State variable for toggling visibility
  const [opened, setOpened] = useState(true);
  const isParent = !Boolean(parent_objective_id);
  const toggleOpen = () => {
    setOpened(!opened);
  };
  return (
    <li className="okr-chunk">
      <div className="okr-title">
        {isParent && (
          <span>
            <i
              onClick={toggleOpen}
              className={"arrow " + (opened ? "up" : "down")}
            ></i>
          </span>
        )}
        <p>{title}</p>
      </div>
      <ul className="child-okr-list">
        {opened && children?.map((c) => <OkrCard key={c.id} data={c} />)}
      </ul>
    </li>
  );
};

export default OkrCard;
