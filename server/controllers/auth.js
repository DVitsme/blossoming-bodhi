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
