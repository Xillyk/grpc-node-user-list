// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as users_pb from "./users_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getFilteredUsers: IUserServiceService_IGetFilteredUsers;
}

interface IUserServiceService_IGetFilteredUsers extends grpc.MethodDefinition<users_pb.FilterRequest, users_pb.UserResponse> {
    path: "/users.UserService/GetFilteredUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<users_pb.FilterRequest>;
    requestDeserialize: grpc.deserialize<users_pb.FilterRequest>;
    responseSerialize: grpc.serialize<users_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<users_pb.UserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    getFilteredUsers: grpc.handleUnaryCall<users_pb.FilterRequest, users_pb.UserResponse>;
}

export interface IUserServiceClient {
    getFilteredUsers(request: users_pb.FilterRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getFilteredUsers(request: users_pb.FilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getFilteredUsers(request: users_pb.FilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getFilteredUsers(request: users_pb.FilterRequest, callback: (error: grpc.ServiceError | null, response: users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getFilteredUsers(request: users_pb.FilterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: users_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getFilteredUsers(request: users_pb.FilterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: users_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
