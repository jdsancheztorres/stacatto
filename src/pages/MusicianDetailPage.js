import React from 'react';
import {Layout} from '../components/layout/Layout';
import {MusicianDetail} from '../components/musician/MusicianDetail';
import '../styles/MusicianDetail.css';
import { useParams } from 'react-router-dom';

export function MusicianDetailPage({ match }){
  const {musicianId} = useParams()
  return (
    <Layout>
      <MusicianDetail musicianId={musicianId} />
    </Layout>
  );
};
