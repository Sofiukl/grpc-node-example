// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_user_UserReply(arg) {
  if (!(arg instanceof user_pb.UserReply)) {
    throw new Error('Expected argument of type user.UserReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserReply(buffer_arg) {
  return user_pb.UserReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_UserRequest(arg) {
  if (!(arg instanceof user_pb.UserRequest)) {
    throw new Error('Expected argument of type user.UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserRequest(buffer_arg) {
  return user_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  saveUser: {
    path: '/user.User/SaveUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserRequest,
    responseType: user_pb.UserReply,
    requestSerialize: serialize_user_UserRequest,
    requestDeserialize: deserialize_user_UserRequest,
    responseSerialize: serialize_user_UserReply,
    responseDeserialize: deserialize_user_UserReply,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
