import { legalEntity } from "./legalEntity";

const { tradeName, legalName, domain, contactEmail, addressLine, companyRegistration, taxId, jurisdictionCity } =
  legalEntity;

export const legalNoticeContent = {
  hero: {
    title: "Legal Notice",
    subtitle: "Learn about our legal notice and terms of use",
  },
  body: `
## LEGAL INFORMATION

Article 10 of Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce, establishes that the provider of information society services shall be obliged to have the means to enable both the recipients of the service and the competent bodies to have permanent, easy, direct and free access by electronic means to the following information:

Domain name: ${domain}

E-mail: ${contactEmail}

Owner: ${legalName}, with registered offices at ${addressLine}, ${companyRegistration}, and with tax identification number ${taxId} (hereinafter, “${tradeName.toUpperCase()}”).

## CONDITIONS OF USE

### Scope, object and scope

These provisions (hereinafter, the "CONDITIONS OF USE"), regulate the access and use of the website service that ${tradeName.toUpperCase()} makes available to Internet Users (hereinafter, the "USER(S)") through the domain ${domain} (hereinafter, the "WEBSITE").

Without prejudice to the foregoing, access to certain content that ${tradeName.toUpperCase()} makes available to the USER via the WEBSITE may be subject to certain specific conditions (hereinafter, the "SPECIFIC CONDITIONS") which, as the case may be, shall replace, complete and/or modify these CONDITIONS OF USE and which, in the event of contradiction, shall prevail over the latter. These SPECIFIC CONDITIONS, where applicable, shall be available to USERS on the WEBSITE itself.

Consequently, before accessing said contents, the USER must carefully read and, where applicable, accept the SPECIFIC CONDITIONS that regulate them in the version published at the time of said access and/or use.

${tradeName.toUpperCase()} reserves the right to make, at any time and without prior notice, any modification or update of the contents, of these CONDITIONS OF USE, as well as, where appropriate, of the corresponding SPECIFIC CONDITIONS and, in general, of any elements that make up the design and configuration of the WEBSITE.

The CONDITIONS OF USE published in the latest update of the WEBSITE shall apply to each visit, and those published at that time on the WEBSITE itself shall apply to each visit.

By accessing the WEBSITE, the USER expressly and unreservedly consents to and accepts these TERMS OF USE by virtue of which the terms of use of the WEBSITE are determined, and such acceptance shall have the same validity and effectiveness as any written and signed contract. In the event that the USER does not fully accept these TERMS OF USE, he/she shall not be authorised to access the WEBSITE.

### USER registration and password

When the use of the WEBSITE and/or access to certain content and/or services made available by ${tradeName.toUpperCase()} through the WEBSITE requires the registration of the USER, the USER shall be responsible for providing truthful and lawful information for this purpose.

By means of said registration, which will be carried out in the manner established at any given time by ${tradeName.toUpperCase()}, the USER will be assigned (i) a login identifier; and (ii) a password, which will allow the USER to log in, at any given time, as a registered user of the WEBSITE.

In the event of theft, loss or unauthorised access to their identifier and password, the USER shall be responsible for immediately notifying ${tradeName.toUpperCase()} of this circumstance so that it can proceed to their cancellation. Under no circumstances will ${tradeName.toUpperCase()} be responsible for the actions carried out by unauthorised third parties who use the USER's identifier and password until the aforementioned notification is made by the USER.

### Economic conditions for access to and use of the WEBSITE

Unless otherwise stipulated in the SPECIFIC CONDITIONS, access to the WEBSITE and its contents are free of charge, except for the cost of connection to the telecommunications network that the USER has contracted with his/her supplier, which will be at the USER'S expense.

### Industrial and Intellectual Property Rights

All Industrial and Intellectual Property rights on the WEBSITE are legally reserved and access to them or their use by the USER must not be considered in any way as the granting of any licence of use or right over any asset whose ownership or property corresponds to ${tradeName.toUpperCase()} and/or any third party. This reservation of rights covers both (i) the external appearance (look and feel) and the code, design and navigation structure of the WEBSITE; and (ii) the content that may be included and distributed through the WEBSITE in any format and, in particular, any catalogues, images and/or audiovisual content that ${tradeName.toUpperCase()} includes on the WEBSITE.

The inclusion on the WEBSITE of references to trade names, trademarks, logos or other distinctive signs, whether registered or not, whether owned by ${tradeName.toUpperCase()} or third parties, is subject to the prohibition of their use without the express consent of ${tradeName.toUpperCase()} or their legitimate owner.

Consequently, the USER may only view and use the content made available through the WEBSITE for strictly personal and private purposes, and provided that it is not for the purpose of developing commercial or professional activities with said content and/or services.

It is also forbidden to decompile, disassemble, reverse engineer, sublicense or transmit in any way, translate or make derivative works of the computer programs necessary for the operation, access and use of the WEBSITE. The USER must abstain in all cases from deleting, altering, evading or manipulating any protection device or security systems that may be installed on the WEBSITE.

### Liability and guarantees

Whoever uses the WEBSITE does so at their own risk. The USER, by accessing the WEBSITE, undertakes (i) not to carry out any conduct that could damage the image, interests and rights of ${tradeName.toUpperCase()} or third parties or that could damage, render useless or overload the WEBSITE or that could prevent, in any way, the normal use of the WEBSITE; and (ii) to use it in a manner fully compliant with the Laws and the uses of commercial traffic.

Consequently, the USER shall be liable to ${tradeName.toUpperCase()} and/or third parties for any damages that may be caused as a result of non-compliance with these obligations.

${tradeName.toUpperCase()} adopts the security measures it considers appropriate to maintain the correct functioning of the WEBSITE and to detect the existence of viruses and harmful components. Nevertheless, the USER must be aware that the security measures of computer systems on the Internet are not entirely reliable and that, therefore, ${tradeName.toUpperCase()} cannot guarantee (i) the continuous availability of the contents and services contained on the WEBSITE; (ii) the absence of errors in said contents or the correction of any defect that may occur; (iii) the non-existence of viruses or other harmful elements that may cause alterations in the USER'S computer systems (software and hardware) or in their electronic documents and files contained therein; nor (iv) the infallibility of the security measures adopted.

Likewise, ${tradeName.toUpperCase()} reserves the right to partially or totally interrupt the service, temporarily or permanently, in the event of technical changes or breakdowns, giving prior notice, if possible, through the WEBSITE or by any other means provided for this purpose.

## LINKS

### Linked sites

Through the WEBSITE, ${tradeName.toUpperCase()} may make available to the USER technical linking devices (such as buttons, links and banners) that may lead the USER to other Internet sites or portals belonging to and/or managed by third parties and over which ${tradeName.toUpperCase()} does not exercise any type of control (hereinafter, the "LINKED SITES").

The USER must take into account that by using these linking devices and accessing the LINKED SITES from the WEBSITE, these TERMS OF USE shall cease to be applicable.

${tradeName.toUpperCase()} does not know or control, in any way, the contents and services included in the LINKED SITES, and the inclusion of an access to them through the WEBSITE does not imply, in any case, (i) that ${tradeName.toUpperCase()} recommend or approve the contents and services hosted in the LINKED SITES; and/or (ii) that there is any type of relationship, collaboration or dependence between ${tradeName.toUpperCase()} and the person responsible for the LINKED SITE.

Consequently, ${tradeName.toUpperCase()} does not assume any type of responsibility for the LINKED SITES and, therefore, are not responsible for their operation, the content and services hosted therein, nor for the links contained in said LINKED SITES.

In the event that the USER has actual knowledge of the unlawfulness or inadequacy of the contents, services or any other activities carried out through a LINKED SITE, he/she must immediately notify ${tradeName.toUpperCase()} so that, where appropriate, they may adopt the measures they deem appropriate.

### Hyperlinks

The establishment of hypertext links (hyperlinks) to other websites or web pages is authorised, provided that they are directed to the home page of ${legalEntity.websiteUrl}, or, where appropriate, to any other internal page (deep link) of the WEBSITE and that the corresponding pages appear in a complete window and under their respective URL addresses, assuming full responsibility and risk that may arise from establishing the hyperlink to the WEBSITE.

The website or web page that establishes the hyperlink may not state in any way that ${tradeName.toUpperCase()} have authorised said hyperlink, unless ${tradeName.toUpperCase()} have done so expressly and in writing.

If the third party that introduces the hyperlink in its website or web page wishes to include in it the brand, denomination, commercial name, label, logotype or any other identifying element owned by ${tradeName.toUpperCase()} and/or referring to the WEBSITE, it must have the prior, express and written authorisation of ${tradeName.toUpperCase()}.

Notwithstanding the above, it is expressly prohibited to present a page of the WEBSITE in a window of another website that does not belong to ${tradeName.toUpperCase()} by means of the technique known as "framing", unless with the express consent of ${tradeName.toUpperCase()}.

Likewise, the insertion of any type of content disseminated through the WEBSITE in another website or web page other than the WEBSITE by means of the technique known as "inline linking", is expressly prohibited without the express consent of ${tradeName.toUpperCase()}.

The establishment of a hyperlink in accordance with the aforementioned conditions shall not imply, under any circumstances, the existence of a relationship between ${tradeName.toUpperCase()} and the owner/responsible party of the website or web page on which said hyperlink is established, nor the acceptance or approval by ${tradeName.toUpperCase()} of its contents and/or services.

In any case, ${tradeName.toUpperCase()} reserve the right to prohibit or disable at any time any hyperlink to the WEBSITE, especially in cases of unlawful activity and / or content of the site or web page in which it is included.

## PRIVACY POLICY. PROTECTION OF PERSONAL DATA

The USER has detailed information about the processing of their personal data by ${tradeName.toUpperCase()} at the following [link](/privacy-policy).

## COOKIE POLICY

The WEBSITE may use cookies and similar technologies to ensure core functionality, remember preferences, and understand aggregated usage of our AI optimization and deployment platform. You can manage preferences through your browser settings and any consent tools made available on the WEBSITE. Essential cookies are required for secure areas and basic navigation; optional analytics cookies help us improve performance without identifying you when configured for aggregated measurement only.

## APPLICABLE LEGISLATION AND JURISDICTION

These TERMS OF USE are subject to Spanish law.

For the resolution of any conflict that may arise from access to the WEBSITE, its contents and/or the services that ${tradeName.toUpperCase()} make available to the USER through the WEBSITE, the USER and ${tradeName.toUpperCase()} expressly agree to submit to the Courts and Tribunals of ${jurisdictionCity}, renouncing any other general or special jurisdiction that may correspond to them, when legally possible.
`.trim(),
};
