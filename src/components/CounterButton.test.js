import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

describe("counter button test", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  it("expect to render CounterButton component", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual(mockColor);
  });

  it("correctly increments the counter", () => {
    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 2 });
  });
});
