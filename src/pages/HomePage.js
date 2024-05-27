import React from 'react';
import {Layout} from '../components/layout/Layout';
import {SearchBar} from '../components/search/SearchBar';
import {FilterPanel} from '../components/search/FilterPanel';
import {MusicianList} from '../components/musician/MusicianList';
import '../styles/HomePage.css';

export function HomePage(){
  const handleSearch = (query) => {
    // Lógica de búsqueda
    console.log('Buscar:', query);
  };

  return (
    <Layout>
      <div className="home-page">
        <SearchBar onSearch={handleSearch} />
        <FilterPanel />
        <MusicianList />
      </div>
    </Layout>
  );
};
