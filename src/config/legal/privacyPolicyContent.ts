import { legalEntity } from "./legalEntity";

const {
  tradeName,
  legalName,
  domain,
  addressLine,
  companyRegistration,
  taxId,
  privacyEmail,
} = legalEntity;

export const privacyPolicyContent = {
  hero: {
    title: "Privacy Policy",
    subtitle:
      "Learn how we handle your data with care and ensure your privacy in our Privacy Policy.",
  },
  body: `
This Privacy Policy (hereinafter, the "PRIVACY POLICY") regulates the collection and processing by ${legalName} (hereinafter, "${tradeName.toUpperCase()}") of personal data that you provide us as a user of the website and related online services accessible through the domain name ${domain} (collectively referred to as the "SERVICES").

${tradeName.toUpperCase()} reserves the right to modify the PRIVACY POLICY in order to adapt it to new legislative, jurisprudential and/or administrative developments, as well as to the practices developed at any given time through the WEBSITE, taking into account your rights and interests at all times.

In any case, ${tradeName.toUpperCase()} will provide you with the appropriate technical resources so that you can access the PRIVACY POLICY in order to duly comply with the information obligations that we must observe in accordance with the applicable data protection regulations.

## 1. Who is the data Controller?

Your personal data will be processed by ${legalName}, an entity with registered office at ${addressLine}, ${companyRegistration}, and with tax identification number ${taxId}, (hereinafter, “${tradeName}”).

In any case, for any question related to the PRIVACY POLICY and/or the processing of your personal data, you may contact us via the e-mail address ${privacyEmail}, set up as a single point of contact for interested parties.

Through our SERVICES, we may collect additional data such as usage telemetry, diagnostic logs, and authentication or account data when you register or use platform features. This data is used to improve your experience, secure the platform, and maintain service functionality.

## 2. How did we obtain your data?

The data that we process at ${tradeName.toUpperCase()} have been obtained from you, through (i) the different forms that you fill in while browsing through the WEBSITE and/or through other channels (e.g. registration as a user of the WEBSITE — where applicable —, contact forms, and forms relating to job offers and/or selection processes, etc.); or (ii) by sending an e-mail enquiry.

In the event that the personal data provided belong to a third party, you guarantee that you have informed said third party of the PRIVACY POLICY and have obtained their authorisation to provide their data to ${tradeName.toUpperCase()} for the purposes indicated below.

Additionally, we inform you of the possible processing of your social network data through the corporate profiles which, in relation to the WEBSITE, ${tradeName.toUpperCase()} maintain available on each social network on which they are present, all in accordance with the terms and conditions established on the social network in question.

We collect data through website forms, user registrations, and email communications. When you use authenticated areas of the platform, we may also process data necessary to operate model optimization, deployment, and API features you request.

## 3. What type of data do we process?

The data that we process are those that you have provided to us while browsing the WEBSITE and/or through the appropriate forms that we use to formalise our contact with you and/or via e-mail, as well as any other data that, where applicable, we obtain through the corporate profiles of ${tradeName.toUpperCase()} on the social networks in which we are present.

In this context, the following categories of data are processed by ${tradeName.toUpperCase()}:

- Personal identification and contact data (e.g. name, surname, postal and e-mail address, telephone number, etc.).
- Professional data (company in which you perform your functions, position and functions, professional postal and e-mail address, and professional telephone number) to the extent that (i) you provide them through the corresponding forms; and (ii) they are necessary for your business relationship and/or for the maintenance of our commercial relationship with you or your entity.
- Identification codes and passwords as a registered user of the WEBSITE, when such registration is possible.
- Internet browsing data (e.g. IP address, visits to web pages, connections to networks, etc.).
- Data on personal characteristics, training, employment, etc. (in the case of job applications/offers and/or ${tradeName.toUpperCase()} selection processes in which you participate voluntarily).
- Technical and usage data related to how you interact with our AI suite, APIs, and control plane when you use those SERVICES.

## 4. For what purpose do we process your data and on what legal bases?

Your personal data will be processed for the following purposes:

- To manage and process your registration as a user of the WEBSITE, where this is possible and on the basis of your request for pre-contractual measures or the contractual relationship established with you in this regard.
- To manage your access to and use of the contents and services that ${tradeName.toUpperCase()} makes available to you through the WEBSITE, including documentation, support channels, or any other functionalities that are accessible from the WEBSITE at any time, on the basis of your request for pre-contractual measures or the contractual relationship established with you in this regard.
- To process and manage requests for information, suggestions, complaints or claims made through the WEBSITE or e-mail, and on the basis of your request for pre-contractual measures or the contractual relationship established with you.
- To manage your job application or your enrollment in a job offer and your participation in the corresponding selection process, based on your request for pre-contractual measures or on the contractual relationship established with you in this regard.
- To operate, secure, and improve our platform, including aggregated analytics and error diagnostics, where permitted by law and, where required, based on your consent or legitimate interests balanced against your rights.

We remind you that you can, at any time, freely withdraw your consent, without any cost and in the terms indicated in Section 7 of this document.

## 5. To whom do we disclose your data?

Except in those cases in which ${tradeName.toUpperCase()} is required to do so by a legal obligation (e.g. Tax Administrations, Administration of Justice or other Public Administrations), your data will not be sold to third parties.

Furthermore, we inform you that your personal data may be communicated to third parties that provide services to ${tradeName.toUpperCase()}, in their capacity as Data Processors (such as hosting, email delivery, analytics, authentication, and customer support tools). Some processors may operate data processing centres located outside the European Economic Area. In those cases, we rely on appropriate safeguards under applicable data protection law, such as Standard Contractual Clauses or adequacy decisions, to ensure an adequate level of protection for your data.

## 6. For how long will we keep your data?

In general, your personal data will be kept as long as you do not withdraw your consent for the processing or request their deletion, and for the time necessary to fulfil the legal obligations that ${tradeName.toUpperCase()} must observe.

In any event, we inform you that ${tradeName.toUpperCase()} has established internal data cleansing policies designed to control the personal data retention periods, so that these may be cancelled when they are no longer needed and / or suitable for the purpose for which they were collected.

In particular, the following is stated: For the management of job applications, your data will be kept for a maximum period of 2 (two) years.

Platform account and usage data will be retained as long as necessary for providing services and fulfilling legal obligations, and will be deleted upon your request or when no longer required, subject to statutory retention periods.

## 7. What are your rights?

The applicable data protection regulation grants you several rights with respect to your personal data which you are free to exercise. Said rights are explained below:

- *Access to your data:* you have the right to access your data in order to obtain confirmation regarding which of your personal data we are processing.
- *Request the rectification or deletion of your data:* in certain circumstances, you have the right to rectify inexact personal data which concern you and are processed by us; or, even, to request their deletion when, among other reasons, such data are no longer required for the purpose for which they were collected.
- *Request restriction of the processing of your data:* in certain circumstances, you have the right to ask that we restrict the processing of your data, in which case we inform you that we will only keep them to execute or defend complaints as envisaged by the applicable data protection regulation.
- *Data portability:* in certain circumstances, you have the right to receive the personal data concerning you, and which you have provided to us, in a structured, commonly used and machine readable format, and to transfer them to another data controller.
- *Object to the processing of your data:* in certain circumstances, and for grounds relating to your particular situation, you have the right to object to the processing of your data, in which case we would stop processing them unless they must be kept for compelling legitimate grounds, or to execute or defend potential claims.

Likewise, where the processing is based on your consent, you have the right to withdraw your consent at any time, without affecting the lawfulness of the processing based on the consent prior to its withdrawal.

You can exercise your rights by sending a written request to ${tradeName.toUpperCase()}, at the postal address indicated in Section 1 or by sending an email to the address ${privacyEmail}.

Finally, note that you can submit a complaint to the competent Supervisory Authority in your country of residence, particularly when you have not obtained satisfaction in the exercise of your rights.

## 8. Security measures

${tradeName.toUpperCase()} will, at all times, process your data with complete confidentiality, observing its duty of secrecy according to the stipulations of the applicable data protection regulation. It will take all of the necessary technical and organisational steps to guarantee the security of your data and prevent their unauthorised alteration, loss, processing or access, given the status of technology, the nature of the data stored and the risks to which they are exposed.

We implement appropriate technical and organizational security measures to protect website and platform data, including encryption in transit, access controls, secure storage, and periodic review of our security practices.

## 9. Cookies Policy

${tradeName} uses cookies and similar technologies to ensure our website functions correctly, remember your preferences, and understand how visitors interact with our content in aggregated form.

**What are cookies?** Cookies are small text files stored on your device when you visit a website. They allow the site to remember your preferences and actions over time, making your next visit easier and the site more useful to you.

**How we use cookies** Depending on their purpose, we use the following categories of cookies:

- **Essential Cookies:** These are strictly necessary for the website to function. They enable core features such as page navigation and access to secure areas. The website cannot function properly without these cookies.
- **Analytics and Performance Cookies:** These help us understand how visitors interact with our website by collecting and reporting information, often in aggregated or pseudonymous form, so we can improve our AI optimization and deployment services.
- **Preference Cookies:** These remember settings you choose so that we can provide a consistent experience across sessions.

**Managing your preferences** You have the right to decide whether to accept or reject non-essential cookies:

1. **Consent tools:** Where available on the WEBSITE, you can adjust your preferences through the consent interface when you load the site or later through settings linked in the footer.
2. **Browser Settings:** You can set your browser to block or alert you about cookies. Please note that blocking essential cookies may affect the functionality of the website.

**International Data Transfers** Some of our service providers may be located outside the European Economic Area (EEA). We ensure that any such transfers are covered by appropriate legal safeguards to guarantee an adequate level of protection for your data.

Authenticated platform areas may use similar technologies (such as local storage or session tokens) required for security and account management. These are not used for third-party advertising.
`.trim(),
};
