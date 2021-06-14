const create = async (user) => {
  try {
    let response = await fetch("/api/users/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip, deflate, br",
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getTopN = async (topn, signal) => {
  try {
    let response = await fetch("/api/users/" + topn, {
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

export { create, getTopN };
