import { Router, Route, Switch, Redirect, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '_state';
// import { Nav, Alert, PrivateRoute } from '_components';
import { history } from '_helpers';
import { Home } from '_pages/home';
import { Users, List, AddEdit } from '_pages/users';
import { Account, Login , Register } from '_pages/account';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
export { App };

function App() {
    const auth = useRecoilValue(authAtom);

    return (
        <div className={'app-container' +  ' bg-light' }>
           <HistoryRouter history={history}>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="users" element={<Users />} >
                    <Route index element={<List />} />
                    <Route path="add" element={<AddEdit />} />
                    <Route path="edit/:id" element={<AddEdit />} />
                </Route>   
                <Route path="account" element={<Account />} >
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>   
             </Routes>
            </HistoryRouter>
            {/* <Router history={history}>
                <Nav />
                <Alert />
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute path="/users" component={Users} />
                    <Route path="/account" component={Account} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router> */}
         </div>
    );
}
