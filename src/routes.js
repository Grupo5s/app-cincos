import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './pages/splash';
import Login from './pages/login';
import Bioimpedancia from './pages/bioimpedancia';
import Dashboard from './pages/dashboard';
import Duvidas from './pages/duvidas';
import GuiaAlimentar from './pages/guiaalimentar';
import MeusResultados from './pages/meusresultados';
import Perfil from './pages/perfil';
import Receitas from './pages/receitas';
import RegraDaMao from './pages/regradamao';
import Ouvidoria from './pages/ouvidoria';
import CameraView from './pages/perfil/camera';
import LivrosReceitas from './pages/livros';

const Stack = createStackNavigator();

const Routes = () => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Bioimpedancia"
                component={Bioimpedancia}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Duvidas"
                component={Duvidas}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="GuiaAlimentar"
                component={GuiaAlimentar}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="MeusResultados"
                component={MeusResultados}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Receitas"
                component={Receitas}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="RegraDaMao"
                component={RegraDaMao}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="Ouvidoria"
                component={Ouvidoria}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="CameraView"
                component={CameraView}
                options={{
                    headerShown: false
                }} />
            <Stack.Screen
                name="LivrosReceitas"
                component={LivrosReceitas}
                options={{
                    headerShown: false
                }} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;