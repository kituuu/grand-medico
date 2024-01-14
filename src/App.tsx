import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { FirstVisit, HomeStack } from './routes/Router';


function App(): React.JSX.Element {
  const [uuid, setUuid] = React.useState<string>('');
    if (!uuid) {
      return (<NavigationContainer>
      <FirstVisit />
    </NavigationContainer>);
    }

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}



export default App;
