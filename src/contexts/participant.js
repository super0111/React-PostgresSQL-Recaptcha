import React, { useState } from 'react';

const ParticipantContext = React.createContext([{}, () => {}]);
const Countries = [
  { label: "Albania", value: 355 },
  { label: "Argentina", value: 54 },
  { label: "Austria", value: 43 },
  { label: "Cocos Islands", value: 61 },
  { label: "Kuwait", value: 965 },
  { label: "Sweden", value: 46 },
  { label: "Venezuela", value: 58 }
];
const ParticipantProvider = (props) => {
  const [participant, setParticipant] = useState(Countries);
  
  return (
    <ParticipantContext.Provider value={[participant, setParticipant]}>
      {props.children}
    </ParticipantContext.Provider>
  );
};

export {ParticipantContext, ParticipantProvider};