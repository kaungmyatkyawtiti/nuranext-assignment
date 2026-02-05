'use client';

import Card from '@/components/Card';
import { DUMMY_LATEST, DUMMY_PROJECTS } from '@/constants';

export default function Home() {
  return (
    <main className="mt-[50vh] mb-[50vh]">
      {
        DUMMY_LATEST.map((project, i) => (
          <Card key={project.id} project={project} i={i} />
        ))
      }
    </main>
  )
}
