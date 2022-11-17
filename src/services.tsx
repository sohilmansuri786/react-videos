import {ListRecommendationsRequest} from './gRPC/rooms/services.public_pb';
import {PublicServiceClient} from './gRPC/rooms/Services.publicServiceClientPb';

const supportedRoomsVersion = '1.0.0';
const header = {'Supported-Service-Version': supportedRoomsVersion};
const service = new PublicServiceClient('https://api.stage.zu.casa');

export const getRecommendations = async () => {
	const request = new ListRecommendationsRequest();
	return (await service.listRecommendations(request, header)).toObject();
};
