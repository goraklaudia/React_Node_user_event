import { fetchHandler } from "../../utils/fetchHandler";
import { userMock } from "../mocks/user";
import { messages } from '../../utils/constants';

describe('Function fetchHandler', () => {
    let setAlert;
    let successCallback;

    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ msg: messages.USER_ADDED }),
        })
    );

    beforeEach(() => {
        setAlert = jest.fn();
        successCallback = jest.fn();
        fetch.mockClear();
    });

    it('should call fetch correct when data are set', () => {
        const options = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userMock)
        }
        fetchHandler('/user', options, setAlert, successCallback);

        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("should do nothing when does not get data", async () => {
        fetchHandler();
        expect(fetch).toHaveBeenCalledTimes(0);
    });
});