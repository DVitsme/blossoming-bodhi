export const currentUser = async (req, res) => {
  res.json(req.currentUser);
};

export const privateRoute = async (req, res) => {
  if (req.currentUser) {
    res.json({ activeUser: true });
  } else {
    res.json({ activeUser: false });
  }
};

export const instructorRoute = async (req, res) => {
  console.log(req.currentUser);
  console.log(req.currentUser.role.includes('Instructor'));
  if (req.currentUser.role.includes('Instructor')) {
    res.json({ activeUser: true });
  } else {
    res.json({ activeUser: false });
  }
};
