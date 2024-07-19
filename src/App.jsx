import React, { useState, useEffect } from 'react';
import { fetchSpaceContent } from '../src/utils/api';
import { categorizeActivities } from './utils/categorizeActivities';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [selectedSpace, setSelectedSpace] = useState('dashResumo1');
  const [errorMessage, setErrorMessage] = useState('');
  const [spaceData, setSpaceData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSpaceContent = async () => {
    setErrorMessage('');
    setIsLoading(true);

    // const existingToken = localStorage.getItem('token');
    const selectedSpaceClean = selectedSpace.replace(/\s/g, '').toLowerCase();
    const response = await fetchSpaceContent(selectedSpaceClean);

    if (response.status) {
      setErrorMessage(response.message);
      setSpaceData([]);
    } else {
      setErrorMessage('');
      setSpaceData(categorizeActivities(response));
    }
    setIsLoading(false);
    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //   'event': 'space_view',
    //   'pageInfo': {
    //     'space': selectedSpaceClean,
    //     'activities': response.length
    //   }
    // });
  };

  useEffect(() => {
    getSpaceContent();
  }, [selectedSpace]);

  return (
    <>
      <GlobalStyles />
      <Header
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
        getSpaceContent={getSpaceContent}
        errorMessage={errorMessage}
      />
      <Main
        errorMessage={errorMessage}
        isLoading={isLoading}
        spaceData={spaceData}
      />
    </>
  );
}

export default App;
