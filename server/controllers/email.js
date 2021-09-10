// change to import individual service later on
// import { SESClient, CloneReceiptRuleSetCommand } from "aws-sdk/client-ses";
import AWS from 'aws-sdk';

const awsConfig = {
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION,
  apiVersion: process.env.AWS_API_VERSION
};
// const client = new SESClient(awsConfig);

const SES = new AWS.SES(awsConfig);

export const sendTestEmail = async (req, res) => {
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: ['gahlok@gmail.com']
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: `
          <html><h1>Sending Test Email</h1>
            <p>Please use the following stuff</p>
          </html>`
        }
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email from aws'
      }
    }
  };

  const emailSent = SES.sendEmail(params).promise();
  emailSent
    .then((data) => {
      console.log(data);
      res.json({ data });
    })
    .catch((err) => {
      console.log(err);
      res.json({ err });
    });
};
