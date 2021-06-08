const create = async (params, credentials) => {
  try {
    let response = await fetch("/api/enrollment/new/" + params.courseId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

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

export { create, listEnrolled };
