import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from './ApiSignup';
import * as types from '../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ApiSignup actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('SIGNUP_SUCCESS action from ApiSignup()', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {status:"success"},
            });
        });

        const expectedActions = [
            { type: types.SIGNUP_SUCCESS, data: {status:"success"} },
        ];

        const store = mockStore({})

        function fetchData () {
            return dispatch => {
                return actions.ApiSignup({},dispatch);
            };
        }

        return store.dispatch(fetchData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});