import { proxyService } from './proxy_service';

const DOMAIN  = 'https://mandrillapp.com/api/1.0/messages/send.json'

export const sendMandrillEmail = (body: unknown) =>
  proxyService.post(DOMAIN, body);