const {Sequelize,Op}=require('sequelize');
var db = require('../models/index')
var Users = db.users;
var data_table= async(req,res,next)=>{

  const { draw, start, length, order, search, columns } = req.query;
   

 

  let columnOrder, orderDirection, orders;
  if (order !== undefined) {
    const { column, dir } = order[0];
 

    if (column == 4) {
      orders = [[{ model: db.details }, "city", dir]];
    } else if (column == 5) {
      orders = [[{ model: db.contact }, "contact", dir]];
    } else {
      columnOrder = columns[column].data;
      orderDirection = dir;
      orders = [[columnOrder, orderDirection]];
    }
  } else {
    columnOrder = "id";
    orderDirection = "asc";
    orders = [[columnOrder, orderDirection]];
  }

  const query = {
    subQuery: false,
    where: {},
     
    order: orders,
    limit: parseInt(length),
    offset: parseInt(start),
    include: [
      {
        model: db.details,
        attributes: ["city"],
      },
      {
        model: db.contact,
        attributes: ["contact"]
      },
    ],
  };
console.log(search.value);
  if (search.value) {
    query.where[Op.or] = [
      { firstName: { [Op.like]: search.value + "%" } },
      { lastName: { [Op.like]: search.value + "%" } },
      { email: { [Op.like]: "%"+ search.value + "%" } },
      { gender: { [Op.like]: search.value + "%" } },
      {
        "$contacts.contact$": {
          [Op.like]: `%${search.value}%`,
        },
      },
      {
        "$detail.city$": {
          [Op.like]: `${search.value}%`,
        }
      }
    ];
  }

  await Users.findAndCountAll(query)
    .then((data) => {
      res.json({
        draw: draw,
        recordsTotal: data.count,
        recordsFiltered: data.count,
        data: data.rows,
      });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
 
}



module.exports = { data_table };