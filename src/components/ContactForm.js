// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const ContactForm = ({ addContact }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContacts] = useState({});

    return (
        <>
            <Card sx={{ margin: "80px", padding: "20px" }}>
                <Stack spacing={2}>
                    <TextField required fullWidth id="filled-required" label="Name" variant="filled" onChange={(event) => setNewContacts({ ...newContact, name: event.target.value })} />
                    <TextField required fullWidth id="filled-required" label="Phone" variant="filled" onChange={(event) => setNewContacts({ ...newContact, phone: event.target.value })} />
                    <TextField required fullWidth id="filled-required" label="Email" variant="filled" onChange={(event) => setNewContacts({ ...newContact, email: event.target.value })} />
                    <TextField required fullWidth id="filled-required" label="Photo" variant="filled" onChange={(event) => setNewContacts({ ...newContact, photo: event.target.value })} />
                    <Button
                        sx={{ width: "fit-content" }}
                        color="primary"
                        variant="text"
                        onClick={() => {
                            addContact(newContact);
                            document.querySelectorAll("input").forEach((input) => (input.value = ""));
                        }}
                    >
                        Add New
                    </Button>
                </Stack>
            </Card>
        </>
    );
};

export default ContactForm;
