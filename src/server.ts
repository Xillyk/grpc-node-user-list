import * as grpc from "@grpc/grpc-js";
import { UserServiceService } from "./proto/users_grpc_pb";
import { userService } from "./service/userService";

const server = new grpc.Server();
server.addService(UserServiceService, userService);

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error("Server error:", err);
      return;
    }
    console.log(`🚀 gRPC Server running on port ${port}`);
  }
);
