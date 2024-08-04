'use client';

import { Navigation } from '@/components/common/navigation';
import { ExperienceSection } from '@/components/landing/experience';
import { FooterSection } from '@/components/landing/footer';
import { ProfileSection } from '@/components/landing/profile';
import { ProjectsSection } from '@/components/landing/projects';

export default function Landing() {
  return (
    <>
      <ProfileSection />
      <ExperienceSection />
      <ProjectsSection />
      <FooterSection />
      <Navigation type="home" />
    </>
  );
}
