import Card from "../components/Card";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to SkillBridge 🎓</h1>
      <p className="text-lg text-gray-700 mb-10">
        Discover career paths, get AI-powered recommendations, and track your learning journey!
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <Card title="Career Recommendations" description="AI-based career suggestions tailored to your profile." link="/recommendations" />
        <Card title="Learning Roadmaps" description="Visual guides to master a career path." link="/roadmap" />
        <Card title="Progress Tracker" description="Track completed tasks and stay motivated." link="/tracker" />
      </div>
    </div>
  );
}
