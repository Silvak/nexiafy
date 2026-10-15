import { legalEntity } from "./legalEntity";

const { tradeName } = legalEntity;

export const suppliersPolicyContent = {
  hero: {
    title: "Suppliers Evaluation Policy",
    subtitle: `At ${tradeName}, we recognize that our suppliers play a critical role in delivering high-quality solutions to our customers. In alignment with the principles of ISO 9001, we are committed to fostering strong relationships with our suppliers, built on mutual trust, accountability, and a shared commitment to excellence.`,
  },
  body: `
To ensure that our suppliers meet the high standards required for our operations, we evaluate them based on the following criteria:

## 1. Timely Delivery of Services

Suppliers must consistently demonstrate their ability to deliver products or services on time and in accordance with agreed-upon schedules. Timely delivery is essential to maintaining operational efficiency and meeting our customer commitments.

## 2. Quality of Delivered Services

The quality of the products or services provided by our suppliers must meet or exceed the specifications and requirements outlined in contracts or agreements. We expect suppliers to maintain robust quality assurance processes and continually strive for improvement.

### 3. Ability to Adapt to Client Needs

Suppliers must exhibit flexibility and a willingness to adapt their offerings to address evolving ${tradeName} requirements. This includes responding to changes in project scope, customizing solutions, and providing proactive support to align with our business objectives.

## Supplier Evaluation and Monitoring

As part of our ISO 9001-compliant Quality Management System, we perform regular evaluations and ongoing monitoring of our suppliers to ensure adherence to these criteria. This includes:

- **Initial Assessment:** Evaluating prospective suppliers against our criteria during the selection process. We always evaluate at least three possible suppliers.
- **Performance Monitoring:** Regularly reviewing supplier performance, with a focus on delivery timelines, service quality, and responsiveness to changing needs.
  - **Evaluation Criteria and Scale** Suppliers are evaluated on a scale from **1 to 10** for each of the above criteria, with **1 being the lowest performance** and **10 representing exceptional performance**.
  - **Timing of Evaluations**
    - **End-of-Service Evaluations:** Supplier performance is assessed at the conclusion of the service to ensure compliance with the agreed terms.
    - **Mid-Service Evaluations (Special Cases):** For critical or extended services, evaluations may be conducted mid-service to provide early feedback and address any performance gaps promptly.
    - **Ongoing Monitoring:** Evaluations are documented and reviewed as part of our supplier performance records. This allows us to track trends, ensure continuous alignment with our expectations, and make informed decisions about future engagements.
- **Feedback Mechanisms:** Providing constructive feedback to suppliers to support continuous improvement and alignment with our expectations.

## Commitment to Continuous Improvement

We are committed to fostering partnerships with suppliers who share our dedication to excellence and continuous improvement. By maintaining strong supplier relationships and upholding these evaluation standards, we ensure the consistent quality and reliability of the products and services we provide to our customers.

<small>Publication Date: January 2025</small>
`.trim(),
};
