import ReactSwagger from '@/app/swagger/react-swagger';
import { getApiDocs } from '@/lib/swagger';

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}
