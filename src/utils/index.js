export const convertDataToTree = (data) => {
  return data.reduce((acc, curr) => {
    const parentKey = curr.parent_objective_id;
    if (!parentKey) {
      if (acc.has(curr.id)) {
        const data = acc.get(curr.id);
        acc.set(curr.id, { ...curr, children: data.children });
      } else {
        acc.set(curr.id, { ...curr, children: [] });
      }
    } else {
      if (!acc.has(parentKey)) {
        acc.set(parentKey, { children: [curr] });
      } else {
        const data = acc.get(parentKey);
        data.children.push(curr);
      }
    }
    return acc;
  }, new Map());
};
