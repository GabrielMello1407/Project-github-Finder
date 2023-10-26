import { useNavigate } from 'react-router-dom'
import React from 'react'
import classes from './BackBtn.module.css'
const BackBtn: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate(-1)} className={classes.back_btn}>Voltar</button></>
  )
}

export default BackBtn