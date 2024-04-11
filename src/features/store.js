import {configureStore} from "@reduxjs/toolkit"
import { companyInfoSlice } from "./reducer"

export const store = configureStore({
  reducer: {
    company: companyInfoSlice.reducer,
  }
})