import dynamic from 'next/dynamic';

const Landing = dynamic(() => import('@/components/Landing'));

export default function Home() {
  return (
    <div>
      <Landing />
    </div>
  );
}
