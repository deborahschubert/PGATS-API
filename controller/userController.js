const userService = require('../service/userService');

exports.register = (req, res) => {
  const { username, password, isFavorecido } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const user = userService.registerUser({ username, password, isFavorecido });
  if (!user) {
    return res.status(409).json({ error: 'Usuário já existe.' });
  }
  res.status(201).json(user);
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuário e senha são obrigatórios.' });
  }
  const user = userService.authenticateUser(username, password);
  if (!user) {
    return res.status(401).json({ error: 'Credenciais inválidas.' });
  }
  res.json({ message: 'Login realizado com sucesso.' });
};

exports.getUsers = (req, res) => {
  res.json(userService.getAllUsers());
};