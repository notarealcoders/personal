import { Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground">
            A passionate developer with a focus on creating exceptional digital experiences.
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Professional Journey</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Briefcase className="h-8 w-8" />
                <CardTitle className="mt-4">Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  8+ years of experience in web development and software engineering
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <GraduationCap className="h-8 w-8" />
                <CardTitle className="mt-4">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Master's in Computer Science with focus on Software Engineering
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Trophy className="h-8 w-8" />
                <CardTitle className="mt-4">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Multiple awards for outstanding project delivery and innovation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">My Story</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I started my journey in software development with a passion for creating
              intuitive and impactful digital solutions. Over the years, I've had the
              privilege of working with amazing teams and clients across various industries.
            </p>
            <p>
              My approach combines technical expertise with a deep understanding of user
              needs, ensuring that every project not only functions flawlessly but also
              delivers real value to its users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}