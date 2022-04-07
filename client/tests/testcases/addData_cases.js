import grpc from 'k6/net/grpc';
import { method } from '../../helpers/method.js';
import { response } from '../../helpers/response_body.js';

export const addDataCases = {
	description: 'Testing GRPC | Add New Data',
	method: `${method.main}/${method.sub.addData}`,
	testcase: {
		positive: `Should get GRPC Response: ${grpc.StatusOK} and Success Add Data with First Name is ${response.addData.positive.firstName}`
	}
};