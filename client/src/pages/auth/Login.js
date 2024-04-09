import React from 'react'
import Form from "../../components/shared/Form/Form";
import {useSelector} from 'react-redux'
import Spinner from '../../components/shared/Spinner';
const Login = () => {
  const {loading,error} = useSelector(state => state.auth)
  return (
    <>
    {error && <span>{ alert(error)}</span>}
    {loading ? <Spinner/> : (
      <div className='row'>
        <div className='col-md-8 form-banner'>
         <img src='https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihbr3F-i3OQu7UqmDQxCq1ZSObAofcekiu8rQZfiXj2e6ryAVQ0ZZ_qfKJUeJrmwLlJadJlK8WjPeVCONEUA4HD8lqTbaJjceyQ=w1920-h922-v0' alt='loginimage'></img>
          </div> 
        <div className='col-md-4 form-container'>
 <Form formTitle={'Login-BloodSewa'} submitBtn={'login'} formType={'login'} /> 
         </div> 
         </div> 
    )}
    </>
  )
}

export default Login