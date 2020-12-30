var messages = require("./user_pb");
var services = require("./user_grpc_pb");

var grpc = require("@grpc/grpc-js");

function main() {
  var target = "localhost:9098";
  var client = new services.UserClient(
    target,
    grpc.credentials.createInsecure()
  );
  var request = new messages.UserRequest();
  request.setName("Sofikul_Node");
  client.saveUser(request, function (err, response) {
    console.log("User RPC Response:", response.getMessage());
  });
}

main();
