import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatars from './Avatars';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Contacts.css';

const Contacts = ({ contacts }) => {
    return (
        <Card raised="true" className="card"> 
                <div>
                {contacts.map((contact) => (
                    <div class="card">
                    <div class="card-body">
                    <CardContent>
                        <Avatars />
                        <Typography variant="h2" class="card-title">{contact.name}</Typography>
                        <Typography variant="h4" class="card-subtitle mb-2 text-muted">{contact.email}</Typography>
                        <Typography variant="p3" class="card-text">{contact.company.catchPhrase}</Typography>
                    </CardContent>
                    <hr />
                    </div>
                    </div>
                ))}
                </div>
        </Card>
    )
}

export default Contacts;