import grpc from 'k6/net/grpc';
import { method } from '../../helpers/method.js';

export const getAllDataCases = {
	description: 'Testing GRPC | Get All Data',
	method: `${method.main}/${method.sub.getAllData}`,
	testcase: {
		positive: `Should get GRPC Response: ${grpc.StatusOK} and Get User Data List`
	}
};