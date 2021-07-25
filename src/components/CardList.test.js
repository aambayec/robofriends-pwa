import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnSnow",
      email: "john_snow@gmail.com",
    },
    {
      id: 2,
      name: "John Smith",
      username: "JohnSmith",
      email: "john_smith@gmail.com",
    },
  ];
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
