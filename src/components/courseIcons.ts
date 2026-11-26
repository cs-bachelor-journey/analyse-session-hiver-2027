import { CodeXml, Cpu, Database, Network, Sigma } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import type { Course } from '@/data/courses'

export const courseIcons: Record<Course['id'], LucideIcon> = {
  'gif-1003': CodeXml,
  'glo-2005': Database,
  'ift-1000': Sigma,
  'ift-2002': Network,
  'gif-1001': Cpu,
}
