import React from 'react';
import 'dotenv/config'

import { Resend } from 'resend';
import ReplyEmail from './emails/reply';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async () => {
  const { data, error } = await resend.emails.send({
    from: "daniel@danielhara.me",
    to: ["haradaniel734@gmail.com"],
    subject: 'Hello World',
    react:  <ReplyEmail />
  });

  return data;
}

export default sendEmail;
