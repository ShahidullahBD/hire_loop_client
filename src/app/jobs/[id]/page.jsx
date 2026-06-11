import JobDetails from "@/components/jobs/JobDetails";
import { getJobById } from "@/lib/api/jobs";


export default async function JobDetailsPage({ params }) {
  const { id } = await params;

  const job = await getJobById(id);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <JobDetails job={job} />
    </div>
  );
}