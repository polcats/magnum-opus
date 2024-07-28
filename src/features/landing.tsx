'use client';

import { Navigation } from '@/components/common/navigation';
import { ExperienceSection } from '@/components/landing/experience';
import { ProfileSection } from '@/components/landing/profile';
import { ProjectsSection } from '@/components/landing/projects';

export default function Landing() {
  return (
    <>
      <Navigation type="home" />
      <ProfileSection />
      <ProjectsSection />
      <ExperienceSection />
    </>
  );
}
