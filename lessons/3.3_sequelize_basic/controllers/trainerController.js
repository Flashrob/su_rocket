const { Trainer, Item, ItemsTrainers } = require("../db/models/index.js");

const trainerFindsItem = async (req, res) => {
  // METHOD 1
  // const trainer = await Trainer.findOne({
  //   where: {
  //     id: req.query.trainerId,
  //   },
  // });

  // const newItem = await Item.create({ name: "Potion" });

  // trainer.setItem(newItem);

  // METHOD 2
  const trainer = await Trainer.findOne({
    where: {
      id: req.query.trainerId,
    },
  });

  const newItem = await Item.create({ name: "Potion" });

  await ItemsTrainers.create({ itemId: newItem.id, trainerId: trainer.id });
};

const findTrainerWithItems = async (req, res) => {
  const { includeItems } = req.params;

  const trainer = await Trainer.findOne({
    where: {
      id: req.query.trainerId,
    },
    // eager loading
    include: Item,
  });

  if (includeItems) {
    // lazy loading
    trainer.getItems();
  }

  /* 
  Either of those will run some kind of query like this:


    SELECT item.id, item.quantity FROM trainers INNER JOIN items_trainers ON trainers.id = items_trainers.id INNER JOIN items ON items.id = items_trainers.id

    trainers.items = result of query in object form {}
  */

  console.log(trainer.Items);
};
