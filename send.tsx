import React from 'react';
import 'dotenv/config'

import { Resend } from 'resend';
import ReplyEmail from './emails/reply';

const resend = new Resend(process.env.RESEND_API_KEY);

(async function () {
  const { data, error } = await resend.emails.send({
    from: "daniel@danielhara.me",
    to: ["haradaniel734@gmail.com"],
    subject: 'Hello World',
    react:  <ReplyEmail />
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
