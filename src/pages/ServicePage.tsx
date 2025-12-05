import { useParams } from 'react-router-dom'

type Service = {
  slug: string
  name: string
  description: string
  bullets: string[]
}

const SERVICES: Service[] = [
  {
    slug: 'managed-it',
    name: 'Managed IT Support',
    description: 'End-to-end IT management with proactive monitoring, patching, and helpdesk support.',
    bullets: ['24/7 monitoring', ' SLA-driven incident response', 'Strategic IT roadmap'],
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    description: 'Threat protection, governance, and disaster recovery planning.',
    bullets: ['Threat detection', 'Security audits', 'Incident response'],
  },
  {
    slug: 'cloud-solutions',
    name: 'Cloud Solutions',
    description: 'Migration, optimization, and operations for scalable cloud platforms.',
    bullets: ['Cloud migration', 'Cost optimization', 'Security in the cloud'],
  },
  {
    slug: 'voip-telecom',
    name: 'VoIP & Telecom',
    description: 'Unified communications, hosted PBX, and reliable telephony.',
    bullets: ['Phone systems', 'SIP trunking', 'UCaaS'],
  },
  {
    slug: 'network-infra',
    name: 'Network & Infrastructure',
    description: 'Reliable network design, deployment, and management.',
    bullets: ['WAN/LAN design', 'SD-WAN', 'Performance monitoring'],
  },
  {
    slug: 'consultancy',
    name: 'IT Consultancy',
    description: 'Strategic guidance to optimize IT investments and outcomes.',
    bullets: ['Assessment & planning', 'Technology roadmap', 'Vendor management'],
  },
  {
    slug: 'remote-monitoring',
    name: 'Remote Monitoring',
    description: 'Remote health checks and proactive maintenance of your IT estate.',
    bullets: ['RMM tooling', 'Automated patching', 'Alerts & dashboards'],
  },
  {
    slug: 'hardware-installations',
    name: 'Hardware Installations',
    description: 'End-to-end procurement, installation, and lifecycle management.',
    bullets: ['Lifecycle procurement', 'Asset tagging', 'On-site deployment'],
  },
]

export default function ServicePage() {
  const { slug } = useParams()
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) {
    return <div className="p-6">Service not found.</div>
  }
  return (
    <section className="py-16 px-4"> 
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-3">{service.name}</h1>
        <p className="text-lg text-slate-700 mb-4">{service.description}</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          {service.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <p className="text-sm text-slate-600">We tailor this service to your needs with a blended approach of people, process, and technology.</p>
      </div>
    </section>
  )
}
