import { NextApiRequest, NextApiResponse } from 'next';
import { readFile } from 'fs/promises';
import path from 'path';

async function getTransactions(req: NextApiRequest, res: NextApiResponse) {
  // const response = await fetch('http://localhost:3000/transactions.json');
  // const data = await response.json();
  // res.status(200).json({ success: true, message: 'Got response', data });

  const filePath = path.join('mock', 'transactions.json');
  try {
    const transactions = await readFile(filePath, 'utf8');
    const data = JSON.parse(transactions);
    res.status(200).json({ success: true, message: 'Got response', data });
  } catch (error) {
    res.status(502).json({
      success: false,
      message: 'Something went wrong while reading file content',
      error
    });
  }
}

export default async function transactionAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    await getTransactions(req, res);
  } else {
    res.status(500).json({ success: false, message: 'No such endpoint exist' });
  }
}
