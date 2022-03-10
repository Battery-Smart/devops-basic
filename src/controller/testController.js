import os from 'os';

const testOSHealth = async (req, res) => {
  res.status(200).json({
    message: {
      'service-name': `${process.env.SERVICE_NAME}`
    },
  });
};

export default {
  testOSHealth,
};
