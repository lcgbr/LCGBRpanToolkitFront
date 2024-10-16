import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { SPACES_OBJECT } from './utils/spaces';
import { fetchSpaceContent } from '../src/utils/api';
import { unifySpaceData } from './utils/categorizeActivities';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from './styles/GlobalStyles';
import ExportCsvButton from './components/FlyingActionButtons/ExportCsvButton';
// import ToggleLayoutButton from './components/FlyingActionButtons/ToggleLayoutButton';


function App() {
  const mBox = sessionStorage.getItem('mBox') || SPACES_OBJECT.dashResumo1.mBox;
  const [selectedSpace, setSelectedSpace] = useState(mBox);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentDisplayedSpace, setCurrentDisplayedSpace] = useState([]);
  const [spaceData, setSpaceData] = useState([[],[]]);
  const [isLoading, setIsLoading] = useState(false);

  const getSpaceContent = async () => {
    setErrorMessage('');
    setIsLoading(true);

    // const existingToken = localStorage.getItem('token');
    const selectedSpaceClean = selectedSpace.replace(/\s/g, '').toLowerCase();
    const response = await fetchSpaceContent(selectedSpaceClean);

    if (response.status) {
      setErrorMessage(response.message);
      setCurrentDisplayedSpace([]);
      setSpaceData([]);
    } else {
      setErrorMessage('');
      const unifiedSpaceData = unifySpaceData(response);
      setCurrentDisplayedSpace(unifiedSpaceData);
      setSpaceData([response, unifiedSpaceData]);
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
        spaceData={currentDisplayedSpace}
      />
      <ExportCsvButton content={spaceData[0]} isDisabled={isLoading} mBox={mBox || 'mBox'} />
      {/* <ToggleLayoutButton isDisabled={isLoading} setCurrentDisplayedSpace={setCurrentDisplayedSpace} spaceData={spaceData}/> */}
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
