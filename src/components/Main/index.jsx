import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards/Card';
import CircularButtons from '../Cards/CircularButtons';
import ActivityTitle from '../ActivityTitle';
import Loading from '../Loading';

import {
  Error, 
  MainContainer, 
  ActivityGroup, 
  ActivityContainer, 
  ActivityContent
} from './style';


export default function Main(props) {
  const { errorMessage, isLoading, spaceData } = props;

  return (
    <MainContainer justify={spaceData.length <= 3}>
      {errorMessage && <Error>Ops! Algo deu errado :(<br/>{errorMessage}</Error>}
      {isLoading ? <Loading /> :
        (<ActivityGroup>
          {spaceData.map((activity, index) => (
            <ActivityContainer key={index}>
              <ActivityTitle payload={{name: activity.name, quantity: activity.options.length}} />

              {activity.options.map((offer, idx) => 
                <ActivityContent key={idx}>
                  <Card offer={offer} priority={activity.priority}/>
                  <CircularButtons offer={offer} priority={activity.priority}/>
                </ActivityContent>
              )}
            </ActivityContainer>
          ))}
        </ActivityGroup >
        )}
    </MainContainer>
  );
}

Main.propTypes = {
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  spaceData: PropTypes.array,
}.isRequired;