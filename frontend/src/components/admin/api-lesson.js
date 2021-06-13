const createLessons = async (params, credentials, lessons) => {
  console.log(lessons);
  try {
    let response = await fetch("/api/lesson/new/" + params.courseId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify({ lessons: lessons }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export { createLessons };
