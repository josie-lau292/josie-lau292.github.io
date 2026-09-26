import Link from 'next/link';
import type { PageInvitation } from '@/data/site';

export function NextStep({ invitation }: { invitation: PageInvitation }) {
  return (
    <div className="page-next-step">
      <p>{invitation.text}</p>
      <Link className="arrow-link" href={invitation.href}>
        {invitation.label} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
