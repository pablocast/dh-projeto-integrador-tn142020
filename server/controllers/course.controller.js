import Courses from "../helpers/courses.json";

const list = async (req, res) => {
  try {
    let courses = await Courses;
    res.json(courses);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export default {
  list,
};
