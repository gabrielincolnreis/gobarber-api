export default interface IMailProvider {
  sendMail(to: string, body: string): Promise<void>;
  // deleteFile(file: string): Promise<void>;
}
