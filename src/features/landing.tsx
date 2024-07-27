'use client';

import { Navigation } from '@/components/common/navigation';
import { ProfileSection } from '@/components/landing/profile';
import { ProjectsSection } from '@/components/landing/projects';
import { ExperienceSection } from '@/components/landing/experience';

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
