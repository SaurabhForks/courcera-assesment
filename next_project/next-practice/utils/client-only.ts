import "client-only";
export const clientonlyCode = () => {
  // This function can only be run on the client side
  // You can put client-side logic here
  // For example, accessing browser APIs or manipulating the DOM, accessing local storage

  console.log("This code is only for client side");
  return "client side code";
};
