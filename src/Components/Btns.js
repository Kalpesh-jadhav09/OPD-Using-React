import React from 'react'
import { Doctor } from './Doctor'
import Receptionist from './Receptionist'

function showReceptionForm() {
  <Receptionist/>
}

function showDoctorForm() {
  <Doctor/>
}

export default function Btns() {
  return (
    <>
    <div className='btnpanel'>
    <button onClick={showReceptionForm} className='button_1' >Receptionist</button>
    <button onClick={showDoctorForm}className='button_1'>Doctor</button>
    </div>
    </>
  )
}
