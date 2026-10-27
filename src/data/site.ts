export const COMPANY = {
  name: 'BD Link Communication Ltd.',
  shortName: 'BD Link',
  tagline: 'Connecting Beyond Borders',
  heroTitle: 'PREMIUM NETWORK QUALITY',
  email: 'info@bdlink.com.bd',
  nocEmail: 'noc@bdlink.com.bd',
  pabx: '+880 9610 555777',
  marketingPabx: '+880 9606 555777',
  mobile: '+8801755648447',
  nocPhone: '+8801755648484',
  emergencyHotline: '+8802 8332548',
  fax: '+880 2 8333275',
  addressLines: [
    'Red Crescent Borak Tower, Level - M',
    '37/3/A, Eskaton Garden Road',
    'Dhaka-1205, Bangladesh',
  ],
} as const

export type NavChild = { label: string; to: string }
export type NavItem = {
  label: string
  to: string
  children?: NavChild[]
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'Company Overview', to: '/about' },
      { label: 'Management', to: '/about/management' },
      { label: 'Board of Directors', to: '/about/board' },
      { label: 'Team', to: '/about/team' },
    ],
  },
  {
    label: 'Our Services',
    to: '/services/international',
    children: [
      { label: 'International', to: '/services/international' },
      { label: 'Submarine Cable (SMW5 / SMW4)', to: '/services/international#submarine-cable' },
      { label: 'Domestic', to: '/services/domestic' },
    ],
  },
  { label: 'Experience', to: '/experience' },
  { label: 'Partners', to: '/partners' },
  { label: 'Contact Us', to: '/contact' },
]

export const FOOTER_COLUMNS = [
  {
    title: 'About Us',
    links: [
      { label: 'Company Overview', to: '/about' },
      { label: 'Management', to: '/about/management' },
      { label: 'Board of Directors', to: '/about/board' },
      { label: 'Team', to: '/about/team' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'International', to: '/services/international' },
      { label: 'Submarine Cable (SMW5 / SMW4)', to: '/services/international#submarine-cable' },
      { label: 'Domestic', to: '/services/domestic' },
    ],
  },
  {
    title: 'Home',
    links: [
      { label: 'Experience', to: '/experience' },
      { label: 'Partners', to: '/partners' },
    ],
  },
] as const

export const HOME_SERVICES = [
  {
    title: 'IPLC Service',
    subtitle: '(International Private Leased Circuit)',
    to: '/services/international#iplc',
  },
  { title: 'Global Ethernet', subtitle: '', to: '/services/international#global-ethernet' },
  { title: 'MPLS VPN', subtitle: '', to: '/services/international#mpls-vpn' },
  {
    title: 'International Internet Gateway (IIG or IP Port) and IP Transit Service',
    subtitle: '',
    to: '/services/international#iig',
  },
  { title: 'Metro Ethernet (ME)', subtitle: '', to: '/services/domestic#metro-ethernet' },
  {
    title: 'Submarine Cable (SMW5 / SMW4)',
    subtitle: '',
    to: '/services/international#submarine-cable',
  },
] as const

export const NETWORK_FEATURES = [
  {
    title: 'Premium class Redundant transmission',
    description: 'Link using International Cable (ITC).',
  },
  {
    title: 'All network elements',
    description: 'have been designed in 1+1 redundancy architecture.',
  },
  {
    title: 'NGN Class 4 architecture.',
    description: 'Carrier-grade next-generation network design.',
  },
  {
    title: '24x7 NOC',
    description: 'with skilled support personnel.',
  },
  {
    title: 'Network security',
    description: 'ensured against network anomalies and DoS attacks.',
  },
  {
    title: 'Billing system from ZTE',
    description: 'a world Leader in Interconnect Billing.',
  },
  {
    title: 'Network management system (NMS)',
    description: 'for real time and user friendly reporting.',
  },
] as const

export const PARTNERS = [
  { name: 'Orange Business Services', src: '/assets/partners/orange.png' },
  { name: 'SITA', src: '/assets/partners/sita.png' },
  { name: 'Cisco', src: '/assets/partners/cisco.png' },
  { name: 'PCCW Global', src: '/assets/partners/pccw.png' },
  { name: 'Equinix', src: '/assets/partners/equinix.png' },
  { name: 'Airtel', src: '/assets/partners/airtel.png' },
  { name: 'BTCL', src: '/assets/partners/btcl.png' },
  { name: 'SingTel', src: '/assets/partners/singtel.png' },
  { name: 'Bharti', src: '/assets/partners/bharti.png' },
  { name: 'Juniper Networks', src: '/assets/partners/juniper.png' },
  { name: 'ZTE', src: '/assets/partners/zte.png' },
] as const

export type TeamIcon = 'users' | 'network' | 'file' | 'layers' | 'shield'

export const TEAM_DEPARTMENTS: { title: string; icon: TeamIcon }[] = [
  { title: 'Admin and Human Resources Team (Coming Soon)', icon: 'users' },
  { title: 'Business Development Team (Coming Soon)', icon: 'network' },
  { title: 'Finance & Accounts Team (Coming Soon)', icon: 'file' },
  { title: 'Technical Team (Coming Soon)', icon: 'layers' },
  { title: 'Network Operations Centre (NOC) Team (Coming Soon)', icon: 'shield' },
]

export const IPLC_FEATURES = [
  {
    title: 'Single End Ordering (SEO)',
    body: "BD Link coordinates the ordering, provisioning and implementation of the IPLC end-to-end service with the foreign carrier on the Customer's behalf.",
  },
  {
    title: 'Single End Billing (SEB)',
    body: 'The Customer will receive a single bill from BD Link for the IPLC end-to-end service.',
  },
  {
    title: 'Single Point of Contact',
    body: 'Manageable and cost effective, BD Link works as your ultimate provider for global communication with multiple vendors on a single simple interface.',
  },
  {
    title: 'Single End Fault Reporting (SEFR)',
    body: 'The Customer shall only contact BD Link for any fault reporting.',
  },
  {
    title: 'Backup circuit service',
    body: 'For each IPLC that you sign up for, you will be able to use one backup circuit (reserve circuit) via a different route for the applicable international zone.',
  },
  {
    title: 'Long Term Contracts',
    body: 'Discount plans for three- and five-year regular usage contracts — 5% and 10% from the monthly IPLC Service charges.',
  },
  {
    title: 'Accessibility and Reliability',
    body: 'IPLC provides a totally dedicated, highly secure clear channel with superior high speed with far greater reach than any of the other global services.',
  },
  {
    title: 'Global Coverage',
    body: 'With coverage in key business centers all over the world, we ensure that your best interests are maintained across geographical borders.',
  },
  {
    title: 'Communication speed',
    body: 'By selecting the optimum transmission speed for your communication volume and applications, you can build a highly efficient and economical international network.',
    speeds: [
      '64kbps',
      '128kbps',
      '192kbps',
      '256kbps',
      '384kbps',
      '512kbps',
      '768kbps',
      '1Mbps',
      '1.5Mbps',
      '2Mbps',
      '6Mbps',
      '45Mbps',
      '150Mbps',
      '2.4Gbps',
    ],
  },
] as const

export const MPLS_FEATURES = [
  "Connects your customers' individual sites securely",
  'Enables consolidation of voice, video and data',
  'Access to the fault management team 24/7 and rigorous Service Level Agreement',
  'Choose from a variety of access technologies',
  'Boost your margins by creating market-leading packages',
] as const
