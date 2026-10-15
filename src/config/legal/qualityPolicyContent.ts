import { legalEntity } from "./legalEntity";

const { tradeName } = legalEntity;

export const qualityPolicyContent = {
  hero: {
    title: "Quality & Environmental Policy",
    subtitle:
      "Learn more about our Quality & Environmental Policy that drives our strategy, ensuring we deliver value and uphold our reputation in production-ready AI optimization",
  },
  bodyBefore: `
## Integrated Management System Policy

#### **Quality and Environmental Commitments**

At ${tradeName}, we are committed to delivering exceptional quality while promoting responsible environmental management through our enterprise-grade platform for model compression, efficient inference, and secure AI deployment.

Our Integrated Management Policy reflects our dedication to meeting customer expectations, complying with applicable legal, regulatory, contractual and environmental obligations and upholding high standards across our industry.

We recognize the importance of providing tailored solutions to our customers' business needs, and we strive to innovate, improve, and excel in all that we do, while managing the environmental aspects associated with our activities, services, offices, suppliers, digital infrastructure and resource use.

#### **Our Focus Areas**

Our Integrated Management System focuses on:

- Continuous product innovation to stay ahead of industry demands.
- Attracting and retaining top talent to drive excellence.
- Efficient planning and execution of projects.
- Leveraging the latest technologies to empower our people and enhance our solutions.
- Responsible use of resources, including energy, water, materials and digital infrastructure.
- Reduction of environmental impacts where possible.
- Improvement of quality and environmental performance through measurable objectives and appropriate controls.

#### **Our Commitments**

To achieve these objectives, ${tradeName} commits to:

- Satisfying the needs and expectations of our stakeholders.
- Fostering a culture of continual improvement, guided by data-driven decision-making.
- Providing training and awareness to support competence in emerging technologies and relevant management system requirements.
- Ensuring compliance with applicable legal, regulatory, contractual and environmental obligations.
- Protecting the environment, including the prevention of pollution and the responsible use of resources.
- Establishing, reviewing and monitoring quality and environmental objectives aligned with our strategy, context and stakeholder expectations.
- Promoting inclusive talent acquisition and development to enrich our team.
- Actively monitoring technological advancements to maintain our competitive edge.
- Continually improving the effectiveness of the Integrated Management System.

This policy forms the foundation of our strategy and operations, ensuring we consistently deliver value to our customers, employees, and stakeholders while upholding our reputation as a trusted partner in efficient AI deployment and supporting our commitment to responsible environmental management.

## Environmental Performance Information

As part of its Integrated Management System, ${tradeName} monitors and reviews relevant environmental performance information to support effective environmental management, compliance with applicable obligations, and continual improvement.

#### **Scope of Environmental Performance Monitoring**

The environmental performance information monitored is aligned with the activities, services, locations, and processes included within the scope of the Integrated Management System.

**Software lifecycle processes, including design, development, and deployment/implementation, in the fields of artificial intelligence optimization and efficient inference.**

Environmental aspects are considered in relation to the activities, resources and operational conditions that support these software lifecycle processes. This includes, where relevant, direct office operations, digital infrastructure, cloud services, data centre and high-performance compute infrastructure, suppliers, and business travel.

Environmental performance monitoring focuses on the environmental aspects that ${tradeName} can control or influence within the context of its software development, deployment and implementation activities.

#### **Environmental Performance Areas Monitored**
`.trim(),
  bodyAfter: `
#### **How We Use This Information**

${tradeName} uses environmental performance information to:

- Evaluate environmental performance.
- Identify trends, risks and opportunities for improvement.
- Support the definition, monitoring and review of environmental objectives.
- Strengthen operational controls related to relevant environmental aspects.
- Improve the traceability, reliability, and completeness of environmental evidence.
- Increase visibility over suppliers, digital infrastructure, and outsourced services.
- Support compliance with applicable legal and other environmental requirements.
- Maintain documented information within the Integrated Management System.
- Support ISO 14001 certification readiness.

#### **Continuous Improvement**

${tradeName} recognizes that environmental performance data may depend on the availability, quality and level of detail of information provided by building managers, suppliers, cloud service providers, travel platforms and internal operational systems.

As part of its continual improvement approach, ${tradeName} works to improve the reliability, traceability and completeness of its environmental performance information. This includes strengthening the way environmental data is collected, reviewed, documented and used across relevant operational, supplier, and management processes.

This approach supports responsible environmental management, evidence-based decision-making and the ongoing development of ${tradeName}'s Integrated Management System.

<small>Publication Date: June 2026</small>
`.trim(),
};
