import { convertDataToTree } from "../utils";

// Fetching data form the mentioned API
// Getting categories here only by using JavaScript Set
export const getOKRs = () => {
  return fetch("https://okrcentral.github.io/sample-okrs/db.json")
    .then((res) => res.json())
    .then(({ data }) => {
      return {
        categories: Array.from(
          data.reduce((acc, curr) => {
            if (!acc.has(curr.category)) {
              acc.add(curr.category);
            }
            return acc;
          }, new Set())
        ),
        okrs: convertDataToTree(data)
      };
    });
};
