import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '_state';

export { Account };

function Account() {
    const auth = useRecoilValue(authAtom);

    useEffect(() => {
        // redirect to home if already logged in
        // if (auth) history.push('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8 offset-sm-2 mt-5">
                    <Outlet></Outlet>
                    {/* <Switch>
                        <Route path={`${path}/login`} component={Login} />
                        <Route path={`${path}/register`} component={Register} />
                    </Switch> */}
                </div>
            </div>
        </div>
    );
}
