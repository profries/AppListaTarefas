import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './componentes/main';

const AppNavigator = createStackNavigator(
    {
        //String de Navegação: Componente da tela
        Main: Main
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

