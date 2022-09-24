import { Card, Grid, List } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { useState } from "react";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
    // Masukkan Header dan lakukan map untuk Contact ke dalam div App
    // untuk membuat daftar kontak bisa menggunakan MUI list
    // https://mui.com/material-ui/react-list/#folder-list

    // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
    const [contacts, setContacts] = useState(contactsJSON);
    // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
    const addContact = (value) => {
        setContacts([...contacts, value]);
    };

    return (
        <div className="App">
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <ContactForm addContact={addContact} />
                </Grid>
                <Grid item xs={6}>
                    <Card sx={{ margin: "80px", padding: "20px" }}>
                        <List>
                            {contacts.map((contact, ind) => (
                                <Contact key={ind} data={contact} />
                            ))}
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default App;
