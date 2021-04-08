import Company from "../helpers/companies.json";

const list = async (req, res) => {
  try {
    let companies = await Company;
    res.json(companies);
  } catch (err) {
    return res.status(400).json({
      error: err,
    });
  }
};

export default {
  list,
};
