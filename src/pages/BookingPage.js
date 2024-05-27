import React from 'react';
import {Layout} from '../components/layout/Layout';
import {BookingForm} from '../components/booking/BookingForm';
import '../styles/BookingPage.css';

export function BookingPage(){
  return (
    <Layout>
      <BookingForm />
    </Layout>
  );
};
