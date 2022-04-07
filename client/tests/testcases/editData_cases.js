import grpc from 'k6/net/grpc';
import { method } from '../../helpers/method.js';
import { response } from '../../helpers/response_body.js';

export const editDataCases = {
	description: 'Testing GRPC | Edit Data',
	method: `${method.main}/${method.sub.editData}`,
	testcase: {
		positive: `Should get GRPC Response: ${grpc.StatusOK} and Success Edit Data with First Name: ${response.editData.positive.firstName}`
	}
};