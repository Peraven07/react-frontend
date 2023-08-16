import React from "react";
import { render, screen } from "@testing-library/react";

import ModelslistEditDialogComponent from "../ModelslistEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders modelslist edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ModelslistEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("modelslist-edit-dialog-component")).toBeInTheDocument();
});
