import React from "react";
import { render, screen } from "@testing-library/react";

import ModelsPage from "../ModelsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders models page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModelsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("models-datatable")).toBeInTheDocument();
    expect(screen.getByRole("models-add-button")).toBeInTheDocument();
});
