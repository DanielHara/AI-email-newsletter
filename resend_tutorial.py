from dotenv import load_dotenv
import resend
import os

load_dotenv()

resend.api_key = os.environ["RESEND_API_KEY"]

params: resend.Emails.SendParams = {
    "from": "daniel@danielhara.me",
    "to": ["haradaniel734@gmail.com"],
    "subject": "hHello world",
    "html": "<strong>it works!</strong>",
}

email = resend.Emails.send(params)
print(email)
