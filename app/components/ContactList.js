import { useCallback } from "react";
import contactsApi from "";
import ContactItem from "./ContactItem.js";

const ContactList = ({contacts , setContacts}) =>{
    const handleRemove = useCallback (async (id) => {
        try {
            await contactsApi.delete(`/contatos/${id}`)
            setContacts((prev) => prev.filter((c) => c.id !== id))
        } catch (error) {
            console.log("error")
        }
    }, [])
    return(
        <>
        <h2>
            contatos({contacts.length})
        </h2>
        <ul>
           <ul className="divide-y">
            {contacts.length === 0 ? (
                <EmptyState message="Nenhum contato cadastrado ainda." />
            ) : (
                contacts.map((c) => (
                    <ContactItem key={c.id} contact={c} handleRemove={handleRemove} />
                ))
            )}
        </ul>
        </ul>
        </>
    )
}
export default ContactList