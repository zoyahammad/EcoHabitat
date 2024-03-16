import * as React from 'react';
import { Container } from './EventCardsStyles';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { events } from '../../constants/constants';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const EventCards = () => {
  return (
    <Container>
      <SectionTitle>Event Directory April 2024</SectionTitle>
      <SectionText>We have curated a directory of upcoming online and offline events that revolve around sustainability topics. If you would like to feature your event, feel free to reach out to us at <b>hello@ecohabitat.com</b>.
      </SectionText>
      {events.map((event) => (
        <Card key={event.id} sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia
            component="img"
            alt={event.title}
            height="140"
            image={event.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {event.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {event.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium">📍 {event.location}</Button>
            <Button size="medium">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default EventCards;