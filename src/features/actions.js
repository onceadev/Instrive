import * as Yup from "yup"

export const companyInfoSchema = Yup.object().shape({
  briefCompanyProfile : Yup.string().max(200).required(),
  pageUrl : Yup.string().url(),
  vision : Yup.string().max(200).required(),
  name : Yup.string(),
  designation: Yup.string(),
  profileSummary: Yup.string().max(150),
  linkedinProfile: Yup.string().url(),
})
