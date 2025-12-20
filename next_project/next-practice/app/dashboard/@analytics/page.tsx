import { Card } from "@/components/Card";
import Link from "next/link";

export default function AnalyticsPage() {
  return (
    <Card>
      <p>This is the analytics page content.</p>
      <Link href="/dashboard/interactive">Interactive</Link>
    </Card>
  );
}
