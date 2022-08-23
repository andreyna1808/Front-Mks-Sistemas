import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import ShoppingCard from "../shoppingCard";

describe("Products component", () => {
  it("Renders Styles Correctly", () => {
    render(
      <Provider store={store}>
        <ShoppingCard />
      </Provider>
    );

    expect(screen.getByRole('button')).toBeInTheDocument()
  });
});
