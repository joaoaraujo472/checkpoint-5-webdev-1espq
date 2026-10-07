'use client'

import { useCallback, useEffect, useRef, useState } from "react";
import contactsApi from "";

const ContactForm = ({setContacts}) => {
    const [form, setform] = useState({nome: "", email: "", telefone: ""})
    const [errors, setErrors] = useState({})
    const nomeInputRef = useRef(null)

    useEffect(() => {
        nomeInputRef.current.focus()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await contactsApi.post('/contatos', form);
            setContacts((prev) => [...prev, { ...response.data }]);
            setform({ nome: "", email: "", telefone: "" });
            nomeInputRef.current.focus()
        } catch (error) {
            console.log(error)
        }
    };

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setform((prev) => ({ ...prev, [name]: value }));
    }, []);

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div>
                <label>
                    Nome <span>*</span>
                </label>
                <input
                    ref={nomeInputRef}
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                />
                {errors.nome && (
                    <p>{errors.nome}</p>
                )}
            </div>

            <div>
                <label>
                    Email <span>*</span>
                </label>
                <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <p>{errors.email}</p>
                )}
            </div>

            <div>
                <label>
                    Telefone <span>*</span>
                </label>
                <input
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                />
                {errors.telefone && (
                    <p>{errors.telefone}</p>
                )}
            </div>

            <button
                type="submit"
            >
                Adicionar Contato
            </button>
        </form>
    )
}

export default ContactForm
