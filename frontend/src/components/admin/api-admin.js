const list = async (signal, resource, params) => {
  var url = "/api/" + `${resource}` + "/";
  try {
    let response = await fetch(url, {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const destroy = async (signal, resource, params) => {
  var url = "/api/" + `${resource}/${params.id}`;
  console.log(url);
  try {
    let response = await fetch(url, {
      method: "DELETE",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { list, destroy };
