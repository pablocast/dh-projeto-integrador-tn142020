const listEnrolled = async (credentials, signal) => {
  try {
    let response = await fetch("/api/enrollment/enrolled", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { listEnrolled };
