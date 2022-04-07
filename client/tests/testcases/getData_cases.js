import grpc from 'k6/net/grpc';
import { method } from '../../helpers/method.js';
import { response } from '../../helpers/response_body.js';

export const getDataCases = {
	description: 'Testing GRPC | Get Single Data',
	method: `${method.main}/${method.sub.getData}`,
	testcase: {
		positive: `Should get GRPC Response: ${grpc.StatusOK} and Get Data with ID: ${response.getData.positive.id}`
	}
};