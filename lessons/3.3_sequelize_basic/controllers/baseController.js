const controller = (Model) => {
  const getAll = async (_req, res) => {
    const records = await Model.findAll();
    res.json(records);
  };

  const getOne = async (req, res) => {
    const { id } = req.params;
    const record = await Model.findByPk(id);
    res.json(record);
  };

  const create = async (req, res) => {
    const newRecord = await Model.create(req.body);
    res.json(newRecord);
  };

  const update = async (req, res) => {
    const { id } = req.params;
    const record = await Model.findByPk(id);
    const updatedRecord = await record.update(req.body);
    res.json(updatedRecord);
  };

  const destroy = async (req, res) => {
    const { id } = req.params;
    const record = await Model.findByPk(id);
    const deletedrecord = await record.destroy();
    res.json(deletedrecord);
  };

  return { getAll, getOne, create, update, destroy };
};

module.exports = controller;
