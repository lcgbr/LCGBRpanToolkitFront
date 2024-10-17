import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';
import Main from '../../components/Main';
import GlobalStyles from '../../styles/GlobalStyles';
import ExportCsvButton from '../../components/FlyingActionButtons/ExportCsvButton';
import ToggleLayoutButton from '../../components/FlyingActionButtons/ToggleLayoutButton';


function Mock() {
  const mBox = sessionStorage.getItem('mBox');
  const [selectedSpace, setSelectedSpace] = useState(mBox);
  const [currentDisplayedSpace, setCurrentDisplayedSpace] = useState([]);
  const [isUnifiedView, setIsUnifiedView] = useState(true); // True = Unificada, False = Modular

  useEffect(() => {
    toast.error('Página em construção');
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header
        selectedSpace={selectedSpace}
        setSelectedSpace={setSelectedSpace}
        getSpaceContent={() => {}}
      />
      <Main
        isLoading={false}
        spaceData={currentDisplayedSpace}
      />
      <ExportCsvButton content={[]} isDisabled={true} mBox={mBox || 'mBox'} />
      <ToggleLayoutButton
        isDisabled={true}
        setCurrentDisplayedSpace={setCurrentDisplayedSpace}
        spaceData={[[],[]]}
        isUnifiedView={isUnifiedView}
        setIsUnifiedView={setIsUnifiedView}
      />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default Mock;
