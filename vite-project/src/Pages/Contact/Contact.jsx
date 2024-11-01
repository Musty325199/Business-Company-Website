import React from 'react'
import Header from '../../Components/Header/Header';
import ContactAll from '../../Components/ContactAll/ContactAll';
import '../Contact/Contact.css'


const Contact = () => {
  return (
<>
<Header/>
<div className='contact'>
<ContactAll/>
</div>
</>
  )
}

export default Contact