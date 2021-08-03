import React, { useState } from 'react';
import { Header } from './components/header';
import { AppContainer } from './components/app-container';
import { UploadForm } from './components/upload-form';
import { ImageGrid } from './components/imageGrid';
import { Modal } from './components/modal';

function App() {
  const [ selectedImg, setSelectedImg ] = useState(null);

  return (
    <AppContainer>
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </AppContainer>
  );
}

export default App;
