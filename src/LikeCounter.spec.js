import React from "react";
import TestUtils from "react-addons-test-utils";
import expect from "expect";
import LikeCounter from "./LikeCounter";

describe("LikeCounter", () => {
  it("should be a link", () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} />);
    const actual = renderer.getRenderOutput().type;
    const expected = "a";
    expect(actual).toEqual(expected);
  });

  it("should show the like count as active", () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} isActive={true} />);
    const actual = renderer
      .getRenderOutput()
      .props.className.includes("LikeCounter--active");
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it("should show the like count as inactive", () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<LikeCounter count={5} isActive={false} />);
    const actual = renderer
      .getRenderOutput()
      .props.className.includes("LikeCounter");
    const expected = true;
    expect(actual).toEqual(expected);
  });
});
