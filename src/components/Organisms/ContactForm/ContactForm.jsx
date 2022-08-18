import React, { useState } from 'react'
import { Button } from '../../Atoms/Button/Button'
import './ContactForm.css'

export const ContactForm = () => {

    const [dataForm, setDataForm] = useState({
        name: " ",
        surname: " ",
        email: " ",
        mensaje: " ",
    })

    const handleChangeName= (e) => {
        setDataForm(prevData => ({ ...prevData, name: e.target.value }))
    }
    const handleChangeSurName = (e) => {
        setDataForm(prevData => ({ ...prevData, surname: e.target.value }))
    }
    const handleChangeEmail= (e) => {
        setDataForm(prevData => ({ ...prevData, email: e.target.value }))
    }
    const handleChangeMensaje = (e) => {
        setDataForm(prevData => ({ ...prevData, mensaje: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(dataForm.name === " " || dataForm.surname === " " || dataForm.email === " " || dataForm.mensaje === " "){
            alert("El formulario está incompleto")
        }else{
        alert(`${dataForm.name} ${dataForm.surname}
        ¡tu mensaje fue recibido!.`)
        document.getElementById("name").value = ""
        document.getElementById("surname").value = ""
        document.getElementById("email").value = ""
        document.getElementById("mensaje").value = ""
        setDataForm({
            name : " ",
            surname : " ",
            email: " ",
            mensaje: " ",
        })
        }
    }

    return (
        <div className='contactForm-container'>
            <div>
                <h2>Dejanos tu Feedback</h2>

            </div>
            <form>
                <div className="contact-inputlabel">
                    <label for="name">Nombre</label>
                    <input onChange={handleChangeName} placeholder="Ingresa tu Nombre" id="name" type="text" />
                </div>
                <div className="contact-inputlabel">
                    <label for="surname">Apellido</label>
                    <input onChange={handleChangeSurName} placeholder="Ingresa tu Apellido" id="surname" type="text" />
                </div>
                <div className="contact-inputlabel">
                    <label for="email">Correo Electrónico</label>
                    <input onChange={handleChangeEmail} placeholder="Ingresa tu Correo Electrónico" id="email" type="text" />
                </div>
                <div className="contact-inputlabel">
                    <label for="mensaje">Tu mensaje</label>
                    <textarea id="mensaje" onChange={handleChangeMensaje} placeholder='Escriba aquí'></textarea>

                </div>
                <Button label="ENVIAR" size="xs" type="submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}
