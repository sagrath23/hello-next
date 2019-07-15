import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Index = () => (
  <Layout>
    <p>Hello Next.js</p>
    <ul>
      <PostLink id="Hello Next.js" />
      <PostLink id="Learn Next.js is awesome" />
      <PostLink id="Deploy apps with Zeit" />
    </ul>
  </Layout>
);

export default Index;
