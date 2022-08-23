import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import Products from "./products";

describe("Products component", () => {
  it("Renders Styles Correctly", () => {
    render(
      <Provider store={store}>
        <Products />
      </Provider>
    );

    expect(screen.getByRole('button')).toBeInTheDocument()
  });
});
