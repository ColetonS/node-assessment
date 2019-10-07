const data = require("./userData.json");

module.exports = {
  getUsers(req, res) {
    if (req.query.age) {
      const filteredUsers = data.filter(user => {
        return user.age < req.query.age;
      });
      res.status(200).send(filteredUsers);
    } else if (req.query.email) {
        const filteredUsers = data.filter(user => {
            return user.email === req.query.email
        })
        res.status(200).send(filteredUsers)
    }
     else if (req.query.favorites) {
         const filteredUsers = data.filter(user => {
             return user.favorites.includes(req.query.favorites)
         })
         res.status(200).send(filteredUsers)
     }
    else {
      res.status(200).send(data);
    }
  }
};
