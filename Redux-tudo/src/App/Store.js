import { configureStore } from "@reduxjs/toolkit";

import TudosSlice from "../TudoSlicer/TudosSlicer";

export const store  = configureStore ({
    reducer: {todos: TudosSlice}
})