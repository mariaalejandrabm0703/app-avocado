import Database from '../../../database/db';

const allAvocados = async (req, res) => {
  const data = await Database.getAll();
  res.status(200).json({ data });
};

export default allAvocados;
