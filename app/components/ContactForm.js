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


}