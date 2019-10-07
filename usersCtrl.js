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
        return user.email === req.query.email;
      });
      res.status(200).send(filteredUsers);
    } else if (req.query.favorites) {
      const filteredUsers = data.filter(user => {
        return user.favorites.includes(req.query.favorites);
      });
      res.status(200).send(filteredUsers);
    } else {
      res.status(200).send(data);
    }
  },
  getUserById(req, res) {
    const user = data.filter(user => {
      return user.id === +req.params.userId;
    });
    if (user !== []) {
        res.status(200).send(user)
    } else {
        res.status(404).send('User does not exist')
    }
  },
  getAdmins(req, res) {
      const admins = data.filter(user => {
          return user.type === 'admin'
      })
      res.status(200).send(admins)
  },
  getNonAdmins(req, res) {
      const nonAdmins = data.filter(user => {
          return user.type === 'user'
      })
      res.status(200).send(nonAdmins)
  },
  getUserByType(req, res) {
      const filteredUsers = data.filter(user => {
          return user.type === req.params.userType
      })
      res.status(200).send(filteredUsers)
  },
  updateUser(req, res) {
      const { first_name, last_name, email, gender, language, age, city, state, type, favorites } = req.body
      const user = data.filter(user => {
          return user.id === +req.params.userId
      })
      user.first_name = first_name
      user.last_name = last_name
      user.email = email
      user.gender = gender
      user.language = language
      user.age = age
      user.city = city
      user.state = state
      user.type = type
      user.favorites = favorites
      res.status(200).send(user)

  }
};
