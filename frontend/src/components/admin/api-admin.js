const list = async (signal, resource, params) => {
  var url = "/api/"+`${resource}`+'/'
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

export { list };
