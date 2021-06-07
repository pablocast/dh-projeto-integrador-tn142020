const create = async (company) => {
  try {
    let response = await fetch("/api/courses/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify(company),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const listCourses = async (signal) => {
  try {
    let response = await fetch("/api/courses/", {
      method: "GET",
      signal: signal,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { create, listCourses };
