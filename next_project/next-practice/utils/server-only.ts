import "server-only";
export const serverOnlyCode = () => {
  // This function can only be run on the server side
  // You can put server-side logic here
  // For example, accessing a database or reading environment variables
  //
  console.log("This code is only for server side");
  return "server side code";
};
