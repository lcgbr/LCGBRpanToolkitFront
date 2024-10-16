import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { SPACES_OBJECT } from './utils/spaces';
import { fetchSpaceContent } from '../src/utils/api';
import { categorizeActivities } from './utils/categorizeActivities';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from './styles/GlobalStyles';
import ExportCsvButton from './components/FlyingActionButtons/ExportCsvButton';


function App() {
  const mBox = sessionStorage.getItem('mBox') || SPACES_OBJECT.dashResumo1.mBox;
  const [selectedSpace, setSelectedSpace] = useState(mBox);
  const [errorMessage, setErrorMessage] = useState('');
  const [spaceData, setSpaceData] = useState([]);
  const [modularSpaceData, setModularSpaceData] = useState([]);
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
      setModularSpaceData([]);
    } else {
      setErrorMessage('');
      setSpaceData(categorizeActivities(response));
      setModularSpaceData(response);
      // setSpaceData(response);
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
      <ExportCsvButton content={modularSpaceData} isDisabled={isLoading} mBox={mBox || 'mBox'} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
