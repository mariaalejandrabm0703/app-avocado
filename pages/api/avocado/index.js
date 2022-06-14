import Database from "../../../database/db";

const allAvocados = async (req, res) => {
  const data = await Database.getAll();
  const lenght = data.length;
  res.status(200).json({ data, lenght });
};

export default allAvocados;
