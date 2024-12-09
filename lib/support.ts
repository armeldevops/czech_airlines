export type SupportItem = {
  id: number;
  title: string;
  description: string;
};

export const support: SupportItem[] = [
  {
    id: 1,
    title: 'What is a Payment Gateway?',
    description: `
      A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses.
      Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.Payment gateways play a vital role in the online transaction process, which is the realisation of value, and hence are seen as an important pillar of ecommerce.
    `,
  },
  {
    id: 2,
    title: 'Do I need to pay to Instapay even when there is no transaction going on in my business?',
    description: `
      No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!
    `
  },
  {
    id: 3,
    title: 'What platforms does Instapay payment gateway support?',
    description: `
      Instapay helps you accept online payments from customers across Desktop, Mobile web, Android & iOS globally.
    `
  },
  {
    id: 4,
    title: 'Does Instapay provide international payments support?',
    description: `
      Yes, Instapay provides support for International transactions. We support all major international cards and 92 currencies including USD, EUR, GBP, SGD, AED.
    `
  },
  {
    id: 5,
    title: 'Is there any setup fee or annual maintainance fee that I need to pay regularly?',
    description: `
      We do not charge for the setup and annual maintainance. You only pay for the plan that you are opting to.
    `
  },
];
