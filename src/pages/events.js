import React from 'react';
import { Layout } from '../layout/Layout';
import EventCards from '../components/EventCards/EventCards';

const EventsPage = () => {
  return (
    <Layout>
      <EventCards></EventCards>
    </Layout>
  );
};

export default EventsPage;
