import IMailProvider from '../models/IMailProvider';
import nodemailer, { Transporter } from 'nodemailer';
export default class EtheralMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }
  public async sendMail(to: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      from: 'Sender Name <sender@example.com>',
      to,
      subject: 'Recuperação de senha',
      text: body,
      html: '<p><b>Hello</b> to myself!</p>',
    });

    console.log('Message sent: %s', message.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}
