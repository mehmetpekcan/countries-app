export const responseHandler = async (serviceFn, ...args) => {
  try {
    const response = await serviceFn(...args);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error("Error fetching data");
  }
};
