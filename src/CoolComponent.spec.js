import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import expectJSX from "expect-jsx";

expect.extend(expectJSX);

const CoolComponent = ({ greeting }) => (
  <div>
    <h1>Greeting</h1>
    <div>{greeting}</div>
  </div>
);

describe("CoolComponent", () => {
  it("should...", () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<CoolComponent greeting="Hello World" />);
    const actual = renderer.getRenderOutput();
    const expected = <div>Hello World</div>;
    expect(actual).toIncludeJSX(expected);
  });
});
