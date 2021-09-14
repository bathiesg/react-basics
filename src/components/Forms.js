import React, {useState} from 'react';


export default function Forms() {
    const [form, setForm] = useState({});

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleCheck = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        alert('form submitted')
    }
    return(
        <>
            <h2>Formularios</h2>

            <form>
                <label htmlFor='nombre'>Nombre:</label>
                <input 
                    type='text'
                    name='nombre'
                    id='nombre'
                    value={form.nombre}
                    onChange={handleChange}
                />

                <p>Elige tu sabor favorito:</p>
                <input 
                    type='radio'
                    name='sabor'
                    id='vanilla'
                    value='vanilla'
                    onChange={handleChange}
                />
                <label htmlFor='vanilla'>Vanilla</label>

                <input 
                    type='radio'
                    name='sabor'
                    id='react'
                    value='react'
                    defaultChecked
                    onChange={handleChange}
                />
                <label htmlFor='react'>React</label>

                <input 
                    type='radio'
                    name='sabor'
                    id='svelte'
                    value='svelte'
                    onChange={handleChange}
                />
                <label htmlFor='svelte'>Svelte</label>

                <input 
                    type='radio'
                    name='sabor'
                    id='vue'
                    value='vue'
                    onChange={handleChange}
                />
                <label htmlFor='vue'>Vue</label>

                <input 
                    type='radio'
                    name='sabor'
                    id='angular'
                    value='angular'
                    onChange={handleChange}
                />
                <label htmlFor='angular'>Angular</label>

                <br/>
                <p>Elige tu lenguje de programacion favorito:</p>
                <select name='lenguaje' defaultValue='' onChange={handleChange}>
                    <option value=''>---</option>
                    <option value='php'>PHP</option>
                    <option value='js'>Javascript</option>
                    <option value='rb'>Ruby</option>
                    <option value='go'>Go</option>
                </select>

                <br/>
                <input 
                    type='checkbox'
                    name='agree'
                    id='agree'
                    value='agree'
                    onChange={handleCheck}
                />
                <label htmlFor='agree'>Conditions of use</label>
                <br/>

                <input 
                    type='submit'
                    onClick={handleSubmit}
                />

            </form>


        </>
        )
}