const transferService = require('../service/transferService');

exports.createTransfer = (req, res) => {
  const { from, to, amount } = req.body;
  if (!from || !to || typeof amount !== 'number') {
    return res.status(400).json({ error: 'Remetente, destinatário e valor são obrigatórios.' });
  }
  const result = transferService.createTransfer({ from, to, amount });
  if (result.error) {
    return res.status(result.status).json({ error: result.error });
  }
  res.status(result.status).json(result.transfer);
};

exports.getTransfers = (req, res) => {
  res.json(transferService.getAllTransfers());
};