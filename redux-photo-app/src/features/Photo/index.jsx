import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound';
import AddEditPage from './pages/AddEdit';
import MainPage from './pages/Main';
import SignIn from 'features/Auth/pages/SignIn';

Photo.propTypes = {};

function Photo(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:photoId`} component={AddEditPage} />
            <Route path="/sign-in" component={SignIn} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Photo;