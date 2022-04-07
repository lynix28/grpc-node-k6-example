import grpc from 'k6/net/grpc';
import { method } from '../../helpers/method.js';

export const deleteDataCases = {
	description: 'Testing GRPC | Delete Data',
	method: `${method.main}/${method.sub.deleteData}`,
	testcase: {
		positive: `Should get GRPC Response: ${grpc.StatusOK}`
	}
};