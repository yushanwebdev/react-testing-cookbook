import { store } from "./store";
import expect from "expect";

describe("store", () => {
  it("should work with a series of actions", () => {
    store.dispatch({
      type: "ADD_QUOTE_BY_ID",
      payload: {
        text: "The best way to cheer yourself up is to try to cheer somebody else up.",
        author: "Mark Twain",
        id: 1,
        likeCount: 24,
      },
    });

    const actual = store.getState();
    const expected = {
      quotes: [
        {
          text: "The best way to cheer yourself up is to try to cheer somebody else up.",
          author: "Mark Twain",
          id: 1,
          likeCount: 24,
        },
      ],
      theme: { color: "#5DC4C6" },
    };
    expect(actual).toEqual(expected);
  });
});
