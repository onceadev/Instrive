import {createSlice} from "@reduxjs/toolkit"


const initialState = {value: {
  briefCompanyProfile: "",
  pageUrl: "",
  vision: "",
  name: "",
  designation: "",
  profileSummary: "",
  linkedinProfile: "",
}}

export const companyInfoSlice = createSlice({
  name: "companyInfo",
  initialState,
  reducers: {
    getDataCompany: (state, action) =>{
      state.value = action.payload
    }
  }
})


export const {getDataCompany} = companyInfoSlice.actions