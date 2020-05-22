import * as yup from 'yup'

const formSchema = yup.object().shape({
 
    name:yup.string()
    .trim()
    .min(2,'The username must be at least 2 characters')
    .required('The username is a required field'),
    size:yup.string()
    .trim()
    .required('The size is a required field'),
    specialInstructions: yup.string()
    .trim()

})

export default formSchema