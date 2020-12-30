# STEPS FOR USING grpc_tools
npm install -g grpc-tools

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:static_codegen/ --grpc_out=grpc_js:static_codegen user.proto

# RUN GRPC CLIENT
node ./static_codegen/user_client.js