"use client"

import Link from "next/link"
import { memo } from "react"

const ContactItem = memo(({ contact, handleRemove, ...props }) => {
    return (
        <li {...props}> 
            <div>
                <Link
                    href={`/contacts/${contact.id}`}
                >
                    {contact.nome}
                </Link>
                <p>
                    {contact.email}•{contact.telefone}
                </p>
            </div>
            <button
                onClick={() => handleRemove(contact.id)}
            >
                excluir
            </button>
        </li>
    );
});

export default ContactItem