const userList = async (signal) => {
  try {
    let response = await fetch("/api/users/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const companyList = async (signal) => {
  try {
    let response = await fetch("/api/companies/", {
      method: "GET",
      signal: signal,
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { userList, companyList };
