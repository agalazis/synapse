export const twilioEnvironmentSchema = {
  accountSid:{
    default: '',
    doc: 'The sid that can be found on twilio console',
    env: 'TWILIO_ACCOUNT_SID',
    format: String,
  },
  authToken: {
    default: '',
    doc: 'Your twilio auth token',
    env: 'TWILIO_AUTH_TOKEN',
    format: String,
  },
  twilioPhoneNumber: {
    default: '',
    doc: 'Your twilio phone number',
    env: 'TWILIO_PHONE_NUMBER',
    format: String,
  },
};
