import React from "react";
import { render, screen } from "@testing-library/react";

import ModelslistPage from "../ModelslistPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders modelslist page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModelslistPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("modelslist-datatable")).toBeInTheDocument();
    expect(screen.getByRole("modelslist-add-button")).toBeInTheDocument();
});
