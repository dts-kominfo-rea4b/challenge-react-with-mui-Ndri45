// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import { Avatar, Card, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <Card sx={{ margin: "80px", padding: "20px" }}>
                <List>
                    {data.map((contact, key) => (
                        <div key={key}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={contact.photo} sx={{ width: 80, height: 80 }} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={contact.name}
                                    secondary={
                                        <React.Fragment>
                                            <Typography sx={{ display: "block" }} component="span" variant="body2" color="text.primary">
                                                {"Phone: " + contact.phone}
                                            </Typography>
                                            <Typography sx={{ display: "block" }} component="span" variant="body2" color="text.primary">
                                                {"Email: " + contact.email}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                    sx={{ marginLeft: 2 }}
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </List>
            </Card>
        </>
    );
};

export default Contact;
