// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var users_pb = require('./users_pb.js');

function serialize_users_FilterRequest(arg) {
  if (!(arg instanceof users_pb.FilterRequest)) {
    throw new Error('Expected argument of type users.FilterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_FilterRequest(buffer_arg) {
  return users_pb.FilterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_UserResponse(arg) {
  if (!(arg instanceof users_pb.UserResponse)) {
    throw new Error('Expected argument of type users.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_UserResponse(buffer_arg) {
  return users_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getFilteredUsers: {
    path: '/users.UserService/GetFilteredUsers',
    requestStream: false,
    responseStream: false,
    requestType: users_pb.FilterRequest,
    responseType: users_pb.UserResponse,
    requestSerialize: serialize_users_FilterRequest,
    requestDeserialize: deserialize_users_FilterRequest,
    responseSerialize: serialize_users_UserResponse,
    responseDeserialize: deserialize_users_UserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService, 'UserService');
